
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Renvois from '../components/Renvois.js'

import CapturesAnimation from '../components/CapturesAnimation.js'
import CaptureHome from '../components/CaptureHome.js'
import ReactSwipeComponentHome from '../components/ReactSwipeComponentHome.js';


import $ from 'jquery';
window.jQuery = window.$ = $;


export default class Accueil_ extends Component {



  render() {
    const jsonPathRenvois = '/json/dataRenvois.json'
    return (
      <div className="container accueil">

        <Helmet>
          <title>Logiciel de gestion et comptabilité en ligne - EBP Horizon</title>
          <meta name="description" content="Gérez votre entreprise avec la solution en ligne EBP Horizon : gestion de devis et factures, comptabilité automatisée"/>
        </Helmet>
        <div className="container__sections">
          <section className="section Abonnements">
            <ReactSwipeComponentHome/>
          </section>
          <h2>Une solution 100% Web</h2>
          <section>
            <CaptureHome/>
          </section>
        </div>

        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>
      </div>
    )
  }
}
