import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import update from 'immutability-helper';


export default class CapturesAnimation extends Component {
  constructor(props){
    super()
    this.state = {
      iframes: [
        {
          "src": "https://static.ebp.com/horizon/capture_anim/mom_accompagnement.html",
        },
        {
          "src": "https://static.ebp.com/horizon/capture_anim/mon_activite.html",
        },
        {
          "src": "https://static.ebp.com/horizon/capture_anim/facturer.html",
        },
      ]
    }
  }
  componentDidMount(){
    const iframes__containerHeight = this.divElement.clientHeight - 900;
    this.setState({ iframes__containerHeight:iframes__containerHeight  });
  }
  _addClass(index, e){
      document.querySelectorAll('.iframe')[index].className = "iframe animated"
  }
  _removeClass(e){
      document.querySelector('.iframe').className = "iframe animated"
  }
  render() {
    return (
      <div className="iframes__container" ref={ (divElement) => this.divElement = divElement} style={{height: this.state.iframes__containerHeight}}>
        {this.state.iframes.map((iframe, index)=>(
          <div key={index} className="iframe">
            <Waypoint
              onEnter={this._addClass.bind(this, index)}
              onLeave={() => console.log('???')}
            />
            <iframe  scrolling="no" src={iframe.src}></iframe>
          </div>
        ))}
      </div>
    )
  }
}
