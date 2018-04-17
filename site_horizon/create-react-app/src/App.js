import React, { Component } from 'react'
import Loader from './components/Loader.js'
import Footer from './components/Footer.js'
import radialEffect from './js/radialEffect'
import BarreMagnetique from './components/BarreMagnetique.js' //MODIF DU CSS POUR MASQUER .icon.master qui depli icones de contact car non validé chefs de produit et non abouti

import Accueil from './roots/Accueil.js'
import Accueil_ from './roots/Accueil_.js'
import Entreprises from './roots/Entreprises.js'
import Expert from './roots/Expert.js'
import Faq from './roots/Faq.js'
import MentionsLegales from './roots/MentionsLegales.js'
import APropos from './roots/APropos.js'
import Abonnement from './roots/Abonnement.js'
import Contact from './roots/Contact.js'
import WayPoint from './roots/WayPoint.js'
import NewPage from './roots/NewPage.js'
import Home from './roots/Home.js'
import Marketplace from './roots/MarketPlace.js'

import NotFound from './components/NotFound.js'

import createBrowserHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Link,
  Switch

} from 'react-router-dom'

import logo from './img/logo_horizon_blanc.png';
import $ from 'jquery';
window.jQuery = window.$ = $;

const innerLinks = [{
  "innerText": "",
  "path": "",
  "component": Accueil,
  "icon":"fa fa-home"
},{
  "innerText": "",
  "path": "accueil",
  "component": Accueil_,
  "icon":"fa fa-home",
  "hide":true
},{
  "innerText": "Groupe EBP",
  "path": "groupe-ebp",
  "component": APropos,
  "icon": "fa fa-plus"
}, {

    "innerText": "Nos solutions",
    "childRoutes": [{

            "innerText": "Entreprise",

            "path": "entreprise",

            "component": Entreprises,


        }, {

            "innerText": "H-store",

            "path": "H-Store",

            "component": Marketplace,
        }

    ]
},{
  "innerText": "Entreprises",
  "path": "en-savoir-plus",
  "component": Entreprises,
  "icon":"fa fa-pie-chart",
  "hide":true
},{
  "innerText": "Expert-comptable",
  "path": "expert",
  "component": Expert,
  "icon": "fa fa-briefcase",
},{
  "innerText": "Aide & support",
  "path": "FAQ",
  "component": Faq,
  "icon": "fa fa-question-circle-o"
},{
  "innerText": "",
  "path": "contact",
  "component": Contact,
  "icon": "fa fa-envelope-o"
},{

  "innerText": "",
  "path": "mentions-legales",
  "component": MentionsLegales,
  "hide": true
},{

  "innerText": "",
  "path": "abonnement",
  "component": Abonnement,
  "hide": true

},{
  "innerText": "....",
  "hide": true,
  "childRoutes": [
    {
      "innerText": "........",
      "path": "......",
      "component": null

    },{
      "innerText": "..........",
      "path": ".......",
      "component": null
    }
  ]

},{

  "innerText": "",
  "path": "NewPage",
  "component": NewPage,
  "hide": true

}]

class Li extends Component {
   constructor(props){
     super(props);
     this.state = {
       open:false
     }
     this.handleClick = this.handleClick.bind(this);
     this.radialEffect = this.radialEffect.bind(this);
   }
   radialEffect(param, e){
     radialEffect(e.target, e)
     e.preventDefault()
     if (param !== '/undefined'){
       setTimeout( () => window.location = param, 125 )
     }
   }
   handleClick(){
     this.state.open === true ? this.setState({open: false}) : this.setState({open: true})
   }

   render(){
     const {path, innerText, hide, icon, childRoutes} = this.props
     return(
       <li className={!!hide ? "hide" : null}>
         <ul>
           <li>
               {path === undefined ?
                 <div  className="ripple-container" style={{position:'relative', overflow:'hidden'}}>
                   <a className="subMenu-btn" onClick={(event) => { this.radialEffect(`/${path}`, event); this.handleClick(); }}>
                    <i className={icon} aria-hidden="true"></i>
                    <span>{innerText}</span>
                   </a>
                  </div>

                 : <div  className="ripple-container btn-tracked-menu" style={{position:'relative', overflow:'hidden'}}>
                      <Link onClick={this.radialEffect.bind(this, `/${path}`)}  to={`/${path}`}>
                         <i className={icon} aria-hidden="true"></i>
                         <span>{innerText}</span>
                      </Link>
                    </div>
                }

               {!!childRoutes  ?
                 <ul className={this.state.open ? "subMenu open" : "subMenu"}>
                    {childRoutes.map (({component, path, innerText, hide, icon}, index) => (
                      <li key={index} className="ripple-container btn-tracked-menu" style={{position:'relative', overflow:'hidden'}}>
                        <div>
                          <Link onClick={this.radialEffect.bind(this, `/${path}`)} to={`/${path}`}>
                            <i className={icon} aria-hidden="true"></i>
                            <span>{innerText}</span>
                          </Link>
                        </div>
                      </li>
                    ))}</ul>
                  :  null }
           </li>
         </ul>
       </li>

     )
   }
 }

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick(){
    //Hack rooter state can not be change
    $('.Nav').toggleClass('open')
  }
  render() {
    const history = createBrowserHistory({forceRefresh: true})
    const jsonPathFooter = '/json/dataFooter.json'

    const Routes = innerLinks.map (({path, component, childRoutes}, index) => (
      !!childRoutes  ?
      childRoutes.map (({component, path}, index) => (<Route key={index} exact path={ path=`/${path}`} component={component}/>))
      : <Route key={index} exact path={`/${path}`} component={component}/>
    ) )

    return(

        <Router history={history}>
          <div>

            <header>
              <i onClick={this.handleHamburgerClick} className="material-icons" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Menu">menu</i>

							<div className="Logo__container">
              	<a href="/"><img alt="" src={logo}/></a>
							</div>
              <ul className={this.state.open ? "Nav open" : "Nav"}>
                {innerLinks.map (( innerLink, index) => (
                  <Li key={index} {...innerLink} />
                ) )}
              </ul>
              <div className="right">
        				<span className="register btn-tracked">
                  <a href="/abonnement">Essai gratuit</a>
                </span>
        				<a href="https://horizonapps.ebp.com/" rel="noopener noreferrer" target="_blank" className="log btn-tracked">
        					<span>Accéder à la plateforme</span>
        				</a>
        			</div>
            </header>

            <main>
             <Switch>
                {Routes}
                 <Route component={NotFound}/>
             </Switch>
            </main>
            <Footer jsonPath={jsonPathFooter}/>


        </div>

        </Router>


    )
  }
}


class App extends Component {

	  render() {
    return (
        <div className="App">
            <Loader/>
  					<Nav/>
            <BarreMagnetique/>
        </div>
    );
  }
}

export default App;
