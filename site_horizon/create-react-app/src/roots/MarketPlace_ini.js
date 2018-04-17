
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../css/MarketPlace.css';


import MarketPlaceItems from '../components/MarketPlaceItems.js'



export default class Marketplace extends Component {



  render() {
    const jsonPath = '/json/dataMarketPlaceItems.json'
    return (
      <div className="container accueil">

        <Helmet>
          <title>Marketplace - EBP Horizon</title>
          <meta name="description" content=""/>
        </Helmet>
        <div className="container__sections">
          <section className="section marketplace">
              <MarketPlaceItems jsonPath={jsonPath}/>
          </section>

        </div>

      </div>
    )
  }
}
