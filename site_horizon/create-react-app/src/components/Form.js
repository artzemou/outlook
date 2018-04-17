// hello-world.jsx

import React, {Component} from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import $ from 'jquery';

window.jQuery = window.$ = $;


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        firstName: '',
        compagny: '',
        defaultChecked : false,
        error: [],
        alertHeight: null

    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeCompagny = this.handleChangeCompagny.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onResolved = this.onResolved.bind(this);
    this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
  }
  handleChangeName(event) {

    this.setState({name: event.target.value});
  }
  handleChangeFirstName(event) {
    this.setState({firstName: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeCompagny(event) {
    this.setState({compagny: event.target.value});
  }
  handleToggleCheckbox (){
    this.state.defaultChecked ? this.setState({defaultChecked: false}) : this.setState({defaultChecked: true});
  }

  onResolved(){
    //console.log( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
    const self = this;
    const greCaptchaResponse = this.recaptcha.getResponse()
    fetch( process.env.PUBLIC_URL + '/webServices/inscriptionJeuConcours.php',{

      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      mode:'no-core',
      body: JSON.stringify({
         email: self.state.email,
         name: self.state.name,
         firstName: self.state.firstName,
         compagny: self.state.compagny,
         defaultChecked : self.state.defaultChecked,
         mailto: self.mailtoInput.value,
         subject: self.subjectInput.value,
         greCaptchaResponse: greCaptchaResponse
      })
    })
    .then(function(response){
      //console.log(response.ok)
      self.setState({error: ["Votre participation a bien été prise en compte"]})
      self.props.handleClick()
      self.setState({alertHeight: $('.alert__msg .content').height() + 28})
    }).then(function(body){

    });
  }

  handleSubmit(e) {
    e.preventDefault()
    const {email, name, firstName, compagny, defaultChecked , error} = this.state
    this.setState({error : []}, () => {
      let errors = []
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (name === '') errors.push('Nom obligatoire')
      if (firstName === '') errors.push('Prénom obligatoire')
      if (compagny === '') errors.push('Nom de société obligatoire')
      if (email === '') errors.push('Email obligatoire')
      else if (!re.test(email)) errors.push('Email invalide')
      if(!defaultChecked) errors.push("Merci d'accepter le règlement")
      this.setState({error: errors}, () =>{
        //console.log(error.length, this.state.error, error === [])
        if(this.state.error.length === 0){
          this.recaptcha.reset();
          this.recaptcha.execute();
        }
        else{
          this.setState({alertHeight: $('.alert__msg .content').height() + 28})
        }
      })
    })

  }


  render() {
    const {email, name, firstName, compagny , error} = this.state
    return (
      <form>
        <div style={{color:'#ffffff', marginBottom:'2rem'}}>Pour participer, remplissez le formulaire ci-dessous :</div>
        <div className="alert__msg" style={{height:this.state.alertHeight}}>
          <div className="content" >
            {error.map((error, index) => (<Error key={index} error={error}/>))}
          </div>
        </div>

        <input ref={(input) => { this.mailtoInput = input }} name="mailto" type="hidden" value="maxime.faynot@ebp.com; sandrine.cancela@ebp.com; benjamin.frizon@ebp.com"/>
        <input ref={(input) => { this.subjectInput = input }} name="subject" type="hidden" value="Inscription questionnaire"/>


        <input value={name} onChange={this.handleChangeName}  placeholder="Nom"/>
        <input value={firstName} onChange={this.handleChangeFirstName}  placeholder="Prénom"/>
        <input value={compagny} onChange={this.handleChangeCompagny}  placeholder="Société"/>
        <input value={email} onChange={this.handleChangeEmail}  placeholder="Adresse email"/>
        <Checkbox checked={() => this.handleToggleCheckbox()} />
        <Recaptcha
          ref={ ref => this.recaptcha = ref }
          sitekey="6LeZRiUUAAAAAHQTj0T0BM7avNU4cp4hnLeU4tQ-"
          onResolved={ this.onResolved } />
        <input onClick={this.handleSubmit} type="submit"  value="participer"/>

      </form>
    )
  }
}

class Error extends Component {
  render() {
    const {error} = this.props
    return(
      <div className="error">{error}</div>
    )
  }
}

class Checkbox extends Component {
  state = {
    isChecked: false,
  }
  toggleCheckboxChange = () => {
    const {checked} = this.props;
    checked()
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }
  render() {
    const label = 'J’accepte le règlement ';
    const { isChecked } = this.state;
    return (
      <div className="checkbox">
        <label className={this.state.isChecked ? "checked" : ""}>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span><a href="https://static.ebp.com/horizon/pdf/reglement_jeu_concours.pdf" target="_blank" style={{textDecoration:'underline'}}>{label}</a></span>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />

        </label>

      </div>
    );
  }
}
