
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import SliderTop from '../components/SliderTop.js'
import FlipCardJeuConcours from '../components/FlipCardJeuConcours.js';

import $ from 'jquery';
window.jQuery = window.$ = $;



export default class JeuConcours extends Component {
  constructor(props){
    super(props);
    this.state = {
      formulaireHeight: ''
    }
  }
  handleResize(e) {

  }
  componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this))
  }
  render() {
    const jsonPath = '/json/dataJeuConcours.js'
    return (
      <div className="container JeuConcours">
        <Helmet>
          <title>Jeu Concours - EBP Horizon</title>
          <meta name="description" content=""/>

        </Helmet>
          <section className="section">
            <SliderTop jsonPath={jsonPath} init={true} current={1}/>
            <div className="JeuConcours__container" >
              <div className="base_line">
              <div className="title">JEU CONCOURS
                  <span>1 an d’expertise comptable à gagner</span>
                  <span>Du 22 janvier au 18 février 2018</span>
                </div>

              </div>
              <FlipCardJeuConcours />

              <div className="A_gagner">
                <div style={{color:'#166eb8', fontSize:'32px', textAlign:'center', margin:'1rem', fontWeight:'bold'}}>&Agrave; GAGNER</div>
                <div style={{background: "#f26811", color:'#ffffff', fontSize:'20px', textAlign:'center', padding:'.5rem'}}>1 AN D’EXPERTISE-COMPTABLE</div>

                <ul>
                  <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
                    <span>Que vous ayez un expert-comptable ou non, EBP vous fait gagner 1500 € de prestations comptable. Cette expertise peut comprendre par exemple : </span>
                  </li>
                  <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
                    <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
                    <span>La tenue de comptabilité annuelle</span>
                  </li>
                  <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
                    <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
                      <span>La recherche de financement</span>
                  </li>
                  <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
                    <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
                    <span>L’&eacute;laboration d’un business plan</span>
                  </li>

                </ul>
                <div style={{fontSize:'28px', textAlign:'center', color: "#166eb8"}}> </div>
                <div style={{background: "#f26811", color:'#ffffff', fontSize:'20px', textAlign:'center', padding:'.5rem'}}>
                    <i className="fa fa-plus" aria-hidden="true"></i> 1 AN D’ABONNEMENT à EBP HORIZON
                </div>

              </div>

            </div>

          </section>

        </div>

    )
  }
}

/*<div style={{maxWidth:1000, margin:'0 auto', height:this.state.formulaireHeight, position:'relative'}}>
  <div className="formulaire animated">
    <div className="content">
      <div style={{color: "#f26811", fontSize:'42px', textAlign:'center'}}>JEU CONCOURS</div>
      <div style={{color: "#333333", fontSize:'32px', textAlign:'center'}}>1 an d’expertise-comptable à gagner*</div>
      <div style={{color: "#333333", fontSize:'22px', textAlign:'center', marginTop:'1rem'}}>Du 22 janvier au 18 février 2018</div>

    </div>
    <div className="A_gagner">
      <div style={{color:'#166eb8', fontSize:'32px', textAlign:'center', margin:'1rem'}}>&Agrave; GAGNER</div>
      <div style={{background: "#f26811", color:'#ffffff', fontSize:'20px', textAlign:'center', padding:'.5rem'}}>1 AN D’EXPERTISE-COMPTABLE</div>

      <ul>
        <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
          <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
          <span>Tenue de comptabilité annuelle</span>
        </li>
        <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
          <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
            <span>Recherche de financement</span>
        </li>
        <li style={{fontSize:'16px', padding:'.5rem', color: "#166eb8"}}>
          <i style={{marginRight:'.5rem'}} className="fa fa-check" aria-hidden="true"></i>
          <span>&Eacute;laboration d’un business plan</span>
        </li>
      </ul>
      <div style={{fontSize:'28px', textAlign:'center', color: "#166eb8"}}> <i className="fa fa-plus" aria-hidden="true"></i></div>
      <div style={{background: "#f26811", color:'#ffffff', fontSize:'20px', textAlign:'center', padding:'.5rem'}}>
          1 AN D’ABONNEMENT <br/>à EBP HORIZON
      </div>

    </div>
    <div className="CTA_container">
        <div>
          <a className="CTA"
              href="https://login.ebp.com/Step08.aspx?guid=e37e15b1fb904c349c0a5317809b53c4">
              Multipliez vos chances de gagner<br/>
          <span style={{fontSize:'14px'}}>en créant votre compte sur  EBP Horizon</span></a>
        </div>
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <a className="ruleLink" href="#">Réglement du jeu concours</a>
          <div style={{fontSize: '10px', marginTop:'1rem', marginLeft:'-60px'}}>*dans la limite de 1500€</div>
        </div>
    </div>
  </div>
</div>*/
