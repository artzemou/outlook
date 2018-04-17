import React, { Component } from 'react';


export default class ScrollTop extends Component {

  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }
  render() {
    return (
      <div className="go-back icon" onClick={this.scrollToTop.bind(this)}>
        <span className='button'><i className="fa fa-arrow-up" aria-hidden="true"></i></span>

			</div>
    )
  }
}
