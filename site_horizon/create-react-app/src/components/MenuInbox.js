import React, { Component } from 'react';
import '../css/MenuInbox.css';
import $ from 'jquery';
window.jQuery = window.$ = $;

export default class EtPlusEncore extends Component {
  constructor(props){
    super()
    this.state = {
      hide: true
    }
  }

  handleOnMouseEnter(){
    this.setState({hide: false})
  }

  handleOnMouseLeave(){
    this.setState({hide: true})
  }

  render() {
    return (
      <div className='icons'  onMouseLeave={this.handleOnMouseLeave.bind(this)}>
        <div className={this.state.hide ? 'hide icon' : 'icon'}>
          <span className='label'>Search</span>
          <span className='button'>&#xf002;</span>
        </div>

        <div className={this.state.hide ? 'hide icon' : 'icon'}>
          <span className='label'>Contacts</span>
          <span className='button'>&#xf0c0;</span>
        </div>
        <div className={this.state.hide ? 'hide icon' : 'icon'}>
          <span className='label'>Mail</span>
          <span className='button'>&#xf0e0;</span>
        </div>
        <div className='icon master' onMouseEnter={this.handleOnMouseEnter.bind(this)}>
          <span className='label'>Send</span>
          <span className='button'>&#xf1d8;</span>
        </div>
      </div>
    )
  }
}
