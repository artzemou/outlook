
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../css/NewPage.css';



//import Jquery if you need...
import $ from 'jquery';
window.jQuery = window.$ = $;


var ReactGA = require('react-ga');
ReactGA.initialize('UA-873612-18');
//ReactGA.initialize('UA-67609565-5');

var ga = ReactGA.ga();

export default class Accueil extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)

  }
  componentDidMount(){
    $('h1').on('click', function(){
      $(this).toggleClass('animated')
    })
    $('article').on('click', function(){
      $(this).toggleClass('animated')
    })
  }

  handleClick(e, param){
    console.log(param)
      ga('send', 'event', {
         eventCategory: param,
         eventAction: 'click',
         eventLabel: ''
       })
  }

  render() {

    return (
      <div className="container newPage">
        <Helmet>
          <title>New Page</title>
          <meta name="description" content="newPage"/>
        </Helmet>
        <section>
          <h1 className="animated">Lorem Ipsum</h1>
          <article>
            <h2>Pourquoi l’utiliser ?</h2>
            <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L’avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu’il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n’en sont encore qu’à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d’y rajouter de petits clins d’oeil, voire des phrases embarassantes).</p>
          </article>
          <article>
            <h2>D’où vient-il ?</h2>
            <p>Contrairement à une opinion répandue, le Lorem Ipsum n’est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s’est intéressé à un des mots latins les plus obscurs, consectetur, extrait d’un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l’éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.<br/>
            L’extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).</p>
          </article>
          <a className="trackedBtnExample" onClick={(e) => this.handleClick(e,'1 autre paramètre (eventCategory par example)')}>trackedBtnExample</a>

        </section>

      </div>
    )
  }
}
