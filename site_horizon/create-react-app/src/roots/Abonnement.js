
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import '../css/App.css';
import ComparativeTable from '../components/ComparativeTable.js'

export default class PageAbonnement extends Component {
  render() {
    const jsonPathDataAbonnement = '/json/dataAbonnement.json'
    return (
      <div className="container container_abonnement">
        <Helmet>
          <title>Abonnement - EBP Horizon</title>
          <meta name="description" content="Choisisser votre abonnement EBP Horizon "/>
        </Helmet>
        <div id="">
          <h2 className="title">Choisissez l abonnement qui vous ressemble <i className="fa fa-plus-circle" aria-hidden="true"></i></h2>
          <section className="section">
            <ComparativeTable jsonPath={jsonPathDataAbonnement}/>
          </section>
        </div>
      </div>
    )
  }
}
