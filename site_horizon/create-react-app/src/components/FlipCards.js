import React, { Component } from 'react';
import FlipCard from '../components/FlipCard.js'


export default class FlipCards extends Component {
    constructor(props){
        super(props);
            this.state = {
            data: []
        };
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
      this.loadData()

    };
    loadData ()  {
      let self = this
      fetch(process.env.PUBLIC_URL + this.props.jsonPath, {
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
       .then(
         function(response) {
           if (response.status !== 200) {
             console.log('Looks like there was a problem. Status Code: ' +
               response.status);
             return;
           }
           response.json().then(function(data) {
              self.setState({
                data: data
              })
              return
           });
         }
       )
       .catch(function(err) {
         console.log('Error', err);
       });
    }

    render() {
      const {data} = this.state
      const {flipbox} = {...data}
        return (
          <div style={{display:'flex'}}>
            { !!flipbox ? flipbox.map((item, index) => ( <FlipCard flipbox={item} key={index}/> )) : null }

          </div>

      )
    }
}
