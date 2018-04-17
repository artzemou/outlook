// hello-world.jsx

import React from 'react';
import Waypoint from 'react-waypoint';

import hector from '../img/hector.png';
import $ from 'jquery';

import animateScrollTo from 'animated-scroll-to';

// desiredOffset - page offset to scroll
// options - object with options
//const desiredOffset = 1000;
// default options


window.jQuery = window.$ = $;



export default class Waypoints extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      message : null,
      animated : false,
      animationState: -1
    }
		this._setMessage = this._setMessage.bind(this);
		this._renderMessage = this._renderMessage.bind(this);
    this._addClass = this._addClass.bind(this);
    this._removeClass = this._removeClass.bind(this);

	}

  _addClass() {
    if(this.state.animationState > 4) this.setState({animationState: - 1})
    this.setState({ animated: true, animationState: this.state.animationState+1 });

  }

  _removeClass() {
    this.setState({ animated: false, animationState: -1 });

  }

  _setMessage(msg) {
    this.setState({ message: msg });
  }

  _renderMessage() {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="basic-example__message">
          {this.state.message}
      </div>
    );
  }

  render() {
    return (
      <div className= {this.state.animated === true ? `basic-example animated${this.state.animationState}` : "basic-example "}>
        {this._renderMessage()}
        <div className="myGost"/>

        <div className="basic-example__scrollable-parent">
          <img className="myGost" alt="" src={hector}/>
          <Spacer innerText={"La compta c’est compliqué !"}/>

          <Waypoint
            onEnter={this._setMessage.bind(this, ':)') && this._addClass}
            onLeave={this._setMessage.bind(this, ':):):)!!!!!!!!!!!!!!!:):):')}
          />
          <Spacer innerText={"Les devis et les factures, ça prend du temps !" }/>
          <Spacer innerText={"La compta c’est compliqué !"}/>
          <Spacer innerText={"La compta c’est compliqué !"}/>
          <Waypoint
            onEnter={this._setMessage.bind(this, ':)') && this._addClass}
            onLeave={this._setMessage.bind(this, ':):):)!!!!!!!!!!!!!!!:):):')}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <Waypoint
            onEnter={this._setMessage.bind(this, ':)') && this._addClass}
            onLeave={this._setMessage.bind(this, ':):):)!!!!!!!!!!!!!!!:):):')}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <Waypoint
            onEnter={this._setMessage.bind(this, ':)') && this._addClass}
            onLeave={this._setMessage.bind(this, ':):):)!!!!!!!!!!!!!!!:):):')}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <Waypoint
            onEnter={this._setMessage.bind(this, ':)') && this._addClass}
            onLeave={this._setMessage.bind(this, ':):):)!!!!!!!!!!!!!!!:):):')}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <Waypoint
            onEnter={this._setMessage.bind(this, '???') && this._addClass}
            onLeave={this._setMessage.bind(this, '???')  && this._removeClass}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
        </div>
      </div>
    )
  }
}

class Spacer extends React.Component {
  handleClick(e){
    const options = {
      // duration of the scroll per 1000px, default 500
      speed: 500,
      // minimum duration of the scroll
      minDuration: 250,
      // maximum duration of the scroll
      maxDuration: 1500,
      // DOM element to scroll, default window
      // Pass a reference to a DOM object
      // Example: document.querySelector('#element-to-scroll'),
      element: document.querySelector('.basic-example__scrollable-parent'),
      // should animated scroll be canceled on user scroll/keypress
      // if set to "false" user input will be disabled until animated scroll is complete
      cancelOnUserAction: true
    };
    let scrollTo = e.target.offsetHeight + e.target.offsetTop
    animateScrollTo(scrollTo, options)
  }

  render(){
    const {innerText} = this.props
    return(
      <div className="basic-example__spacer" onClick={this.handleClick.bind(this)}>
        <h3>Idéees reçue</h3>
        {innerText}
      </div>
    )
  }
}
