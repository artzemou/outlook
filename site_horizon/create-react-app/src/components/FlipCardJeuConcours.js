import React, { Component } from 'react';
import Form from '../components/Form.js'

export default class Flipbox extends Component {
    constructor(props){
        super(props);
            this.state = {
            className: "flipbox"
        };
    }
    handleClick() {
        this.state.className === 'flipbox'? this.setState({className: "flipbox flipped"}) : this.setState({className: "flipbox"});
    }
    render() {
        return (
            <div  className={this.state.className}>
                        <div className="wrapper">
                              <div className="front">
                                <Form handleClick={this.handleClick.bind(this)}/>
                              </div>
                              <div className="back" onClick={this.handleClick.bind(this)}>
                                <div>
                                    <div style={{margin:'2rem', marginTop:'4rem', marginBottom:'4rem'}}>
                                      <span>Votre participation<br/> a bien été prise en compte

                                      </span>
                                    </div>
                                    <div style={{margin:'2rem 2rem 1rem'}}>
                                      <span >
                                      Multipliez vos chances de gagner
                                      en créant votre compte sur
                                      </span>
                                    </div>
                                    <div className="white-btn">
                                      <a
                                          href="/abonnement">
                                           EBP Horizon</a>
                                    </div>
                                </div>
                              </div>
                          </div>
            </div>


      )
    }
}
