
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import SliderTop from '../components/SliderTop.js'
import Renvois from '../components/Renvois.js'
import SliderAccordion from '../components/SliderAccordion.js'
import SliderIdeesRecues from '../components/SliderIdeesRecues.js'
import ComparativeTable from '../components/ComparativeTable.js'

export default class Accueil extends Component {
  render() {
    const jsonPath = '/json/dataPromotion.json'
    const jsonPathRenvois = '/json/dataRenvois.json'
    const jsonPathSliderAccordion = '/json/dataChooseHorizon.json'
    const jsonPathSliderIdeesRecues = '/json/dataReceivedIdea.json'
    const jsonPath3 = '/json/dataSubscription.json'
    return (
      <div className="container accueil">
        <Helmet>
          <title>Logiciel de gestion et comptabilité en ligne - EBP Horizon</title>
          <meta name="description" content="Gérez votre entreprise avec la solution en ligne EBP Horizon : gestion de devis et factures, comptabilité automatisée"/>
        </Helmet>
        <section className="section">
          <SliderTop jsonPath={jsonPath} init={true} current={1}/>
        </section>
        <h2 className="title">EBP HORIZON, LA PLATEFORME DE FACTURATION ET COMPTABILITÉ CONNECTÉE  <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section">
          <div className="abonnement_txt">
            <span>Pensée pour les entrepreneurs et les TPE, la plateforme de gestion EBP Horizon propose 3 abonnements, choisissez celui qui vous ressemble. </span>
          </div>
          <ComparativeTable jsonPath={jsonPath3}/>
        </section>
        <h2 className="title">Pourquoi choisir la plateforme EBP horizon ? <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section choisirHorizon">
          <SliderAccordion jsonPath={jsonPathSliderAccordion}/>
        </section>
        <h2 className="title">Non aux idées reçues ! <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
        <section className="section">
          <SliderIdeesRecues jsonPath={jsonPathSliderIdeesRecues}/>
        </section>
        <div id="renvoi">
          <Renvois jsonPath={jsonPathRenvois}/>
        </div>
      </div>
    )
  }
}
