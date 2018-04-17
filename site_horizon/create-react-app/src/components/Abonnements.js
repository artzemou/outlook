import React, { Component } from 'react';
import FlipCards from '../components/FlipCards.js'


export default class Abonnements extends Component {

  constructor(props){
        super(props);

   }


  handleClick(e){
      window.location.pathname =  "abonnement"
  }

  render() {
    const jsonPath = '/json/dataFlipCardsAbonnement.json'
    return (
        <FlipCards jsonPath={jsonPath}/>
    )
  }
}
