
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../css/MarketPlace.css';
//AJOUT BENB POUR SLIDER
import SliderTop from '../components/SliderTop.js'
// FIN AJOUT BENB POUR SLIDER
import MarketPlaceItems from '../components/MarketPlaceItems.js'



export default class Marketplace extends Component {



  render() {
    const jsonPath = '/json/dataMarketPlaceItems.json'
	  const jsonPath1 = '/json/dataBannerHSTORE.json'
    return (
      <div className="container accueil">

        <Helmet>
          <title>H-Store - EBP Horizon</title>
          <meta name="description" content=""/>
        </Helmet>




          <section className="section marketplace">
              <MarketPlaceItems jsonPath={jsonPath}/>
		      </section>
      </div>
    )
  }
}
