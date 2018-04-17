import React, { Component } from 'react';


export default class FlipCard extends Component {
  constructor(props){
      super(props);
          this.state = {
          className: "flipbox"
      };
  }


  handleClick() {
      this.state.className === 'flipbox'? this.setState({className: "flipbox flipped"}) : this.setState({className: "flipbox"});
  }
  render(){

    const {flipbox} = this.props
    const {front, back} = { ...flipbox}
    return(
      <div className="flipCard__container" style={{flex:1}}>
        <div  className={this.state.className} onClick={this.handleClick.bind(this)}>
          <div className="wrapper">
            <div className="front">
                { !!front ? front.map((item, index) => ( <FlipCardFront content={item} key={index}/> )) : null }
            </div>
            <div className="back">
                { !!back ? back.map((item, index) => ( <FlipCardBack content={item} key={index}/> )) : null }
            </div>
            </div>
        </div>
      </div>
    )
  }
}

class FlipCardFront extends Component {
  constructor(props){
      super(props);
          this.state = {
          hover: false,
          height: 0
      };
      this.handleResize = this.handleResize.bind(this);
  }

  handleResize(){
    const height = this.divElement.clientWidth;
    this.setState({ height:height });
  }

  componentDidMount() {
    const height = this.divElement.clientWidth;
    this.setState({ height:height });
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }



  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render(){
    const {content} = this.props
    const {heading, body, footer, img} = { ...content}
    let linkStyle;

    return(
      <div ref={ (divElement) => this.divElement = divElement}
      style={{
        display:'flex',
        flex:1, minHeight:this.state.height,
        alignItems: 'flex-end'}
      }>
        <div className="Bg"
        style={{
          background: `url(img/FlipCardsBg/${img}.jpg) 100% 100% / cover`,
          display:'flex',
          flex:1}
        }>
        </div>
        <div className="FlipCardCta">
          <span>{heading}</span>
          <span>{body}</span>
          <span>{footer}</span>
        </div>
      </div>
    )
  }

}

class FlipCardBack extends Component {
  render(){
    const {content} = this.props
    const {heading, body, footer} = { ...content}
    return(
      <div>
        <div>
          <div>{heading}</div>
          <div>{body}</div>
          <div>{footer}</div>
        </div>
      </div>
    )
  }

}
