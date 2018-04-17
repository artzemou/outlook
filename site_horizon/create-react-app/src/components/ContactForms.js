// hello-world.jsx

import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';

import $ from 'jquery';

window.jQuery = window.$ = $;

//addRecaptchaApi()

class ListContact extends React.Component{
      constructor() {
        super();

        this.state = {
          open:false,
          email: '',
          name: '',
          firstName: '',
          compagny: '',
          phone:'',
          msg:'',
          error: [],
          formulaireHeight: null,
          alertHeight: null

        };

        this.baseState = this.state
        this.toggle = this.toggle.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeCompagny = this.handleChangeCompagny.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
        this.handleSetMailto = this.handleSetMailto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
        this.handleResize = this.handleResize.bind(this);
      }

      handleResize(){
        console.log(':)')
      }

      handleSetMailto(event) {
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
      handleChangePhone(event) {
        this.setState({phone: event.target.value});
      }
      handleChangeMsg(event) {
        this.setState({msg: event.target.value});
      }

      componentWillUnmount() {
          window.removeEventListener('resize', this.handleResize)
      }
      componentDidMount(){
          window.addEventListener('resize', this.handleResize)

      }
      handleSubmit(e) {
        e.preventDefault()
        const {email, name, firstName, compagny, phone, msg} = this.state
        this.setState({error : []}, () => {
          let errors = []
          // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          //  console.log(re.test(value))
          if (firstName === '') errors.push('Prénom obligatoire')
          if (name === '') errors.push('Nom obligatoire')
          if (compagny === '') errors.push('Nom de société obligatoire')
          if (phone === '') errors.push('Numéro de téléphone obligatoire')
          if (email === '') errors.push('Email obligatoire')
          else if (!re.test(email)) errors.push('Email invalide')
          if (msg === '') errors.push('Merci de préciser votre message')
          this.setState({error: errors}, () =>{
            //console.log(error.length, this.state.error, error === [])
            if(this.state.error.length === 0){
              this.recaptcha.reset();
              this.recaptcha.execute();
              this.setState({alertHeight: 0})
            }
            else{
              let alertMaxHeight = 0;
              $('.alert__msg .content').each(function(){
                if($(this).height() > alertMaxHeight){
                  alertMaxHeight = $(this).height()
                }
              })
              this.setState({alertHeight: alertMaxHeight + 28})
              this.setState({formulaireHeight: $('form').height() + alertMaxHeight + 56})
            }
          })
        })

      }

      onResolved() {
        const self = this;
        const greCaptchaResponse = this.recaptcha.getResponse()
        fetch( process.env.PUBLIC_URL + '/webServices/fetchMail.php',{
          method: 'POST',
          mode:'no-core',
          body: JSON.stringify({
             email: self.state.email,
             name: self.state.name,
             firstName: self.state.firstName,
             compagny: self.state.compagny,
             msg: self.state.msg,
             phone: self.state.phone,
             mailto: self.mailtoInput.value,
             subject: self.subjectInput.value,
             greCaptchaResponse: greCaptchaResponse

          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(function(response){
          console.log(response.ok)
          self.setState({error: ["Votre message a bien été envoyé"]})
          //return response.json()
          let alertMaxHeight = 0;
          $('.alert__msg .content').each(function(){
            if($(this).height() > alertMaxHeight){
              alertMaxHeight = $(this).height()
            }
          })
          self.setState({alertHeight: alertMaxHeight + 28})
          self.setState({formulaireHeight: $('form').height() + alertMaxHeight + 56})

        }).then(function(body){

        });

      }

      toggle(){

        this.state.open ? this.setState({open: false, formulaireHeight:0}) : this.setState({open: true, formulaireHeight: $('form').height() + $('.alert__msg .content').height() + 56})
      }

      render(){
        const {data} = this.props
        const {title, tel, text, mailto} = {...data}
        const {error, open} = this.state

          return(
            <div className={open ? "Form open" : "Form "}>
              <ul className={title}>
                <li className="title">{title}</li>
                <li className="tel">{tel}</li>
                <li className="mailto" dangerouslySetInnerHTML={{__html: text}} onClick={this.toggle}></li>
                <li className="formContact" style={{height:this.state.formulaireHeight}} >
                  <form autoComplete="off">
                    <div className="alert__msg" style={{height:this.state.alertHeight}}>
                      <div className="content">
                          {error.map((error, index) => (<Error key={index} error={error}/>))}
                      </div>
                    </div>
                    <input ref={(input) => { this.mailtoInput = input }} name="mailto" type="hidden" value={mailto}/>
                    <input ref={(input) => { this.subjectInput = input }} name="subject" type="hidden" value="Demande d'information"/>

                    <input name="firstName" placeholder="Votre pr&eacute;nom" onChange={this.handleChangeFirstName}/>
                    <input name="name"  placeholder="Votre nom" onChange={this.handleChangeName}/>
                    <input name="compagny" placeholder="Votre soci&eacute;t&eacute;" onChange={this.handleChangeCompagny}/>
                    <input name="phone"  placeholder="Votre num&eacute;ro de t&eacute;l&eacute;phone" onChange={this.handleChangePhone}/>
                    <input name="email"  placeholder="Votre email" onChange={this.handleChangeEmail}/>
                    <textarea name="msg" placeholder="Votre message" onChange={this.handleChangeMsg}></textarea>
                    <Recaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6LeZRiUUAAAAAHQTj0T0BM7avNU4cp4hnLeU4tQ-"
                        onResolved={ this.onResolved }
                    />
                    <input onClick={this.handleSubmit} type="submit" value="Envoyer"/>
                  </form>
                </li>
              </ul>
            </div>

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




    export default class RenderContacts extends React.Component {
          constructor() {
            super();
            this.state = {
              open: false,
              data : []

            };
            this.toggle = this.toggle.bind(this);
            this.loadData = this.loadData.bind(this);
          }
          componentDidMount(){
            this.loadData ()

          }

          loadData ()  {
            let self = this
            fetch(process.env.PUBLIC_URL + this.props.jsonPath, {
                  headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }

                })
             .then(
               function(response) {
                 if (response.status !== 200) {
                   console.log('Looks like there was a problem. Status Code: ' +
                     response.status);
                   return;
                 }

                 // Examine the text in the response
                 response.json().then(function(data) {
                    self.setState({
                      data: data
                    })

                    return
                 });
               }
             )
             .catch(function(err) {
               console.log('Error', err);
             });
          }
          toggle(e){
            this.state.open ? this.setState({open: false}) : this.setState({open: true})
          }
          render() {
            const {data} = this.state
            return (
              <div>
                   <div className="clearfix">

                        {!!data.items ? data.items.map((data, index) =><ListContact key={index} data={data}/>) : null }

                   </div>
                   <div className={this.state.open ? "callBack open" : "callBack"} onClick={this.toggle}>
                       <div className="open_form">Faites-vous rappeler</div>

                       <iframe  scrolling="no"  src="https://www.ebp.com/groupe/a-propos/callback-horizon"></iframe>

                   </div>

              </div>

            );

          }

    }
