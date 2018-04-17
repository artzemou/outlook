import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import update from 'immutability-helper';
import Swiper from 'react-id-swiper';
import SliderHStoreCapture from '../components/SliderHStoreCapture.js'
import $ from 'jquery';
window.jQuery = window.$ = $;
var ReactGA = require('react-ga');
ReactGA.initialize('UA-873612-18');



export default class HStore extends Component {
  constructor(props){
    super(props);
    this.state = {

      intervalId: 0,
      data : [],
      itemSelected: null,
      zooom:false,
      params :{
         rebuildOnUpdate : true,
          loop: true,
         initialSlide: 0,
         simulateTouch:true,
          grabCursor: true,
           pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,

           },
           navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          }

      },
      modalopened:false,
      priceModal:false
    }
    this.loadData = this.loadData.bind(this);
    this.selectItem = this.selectItem.bind(this)
  }




  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  componentDidMount() {
    this.loadData()

  }
  componentDidUpdate(prevProps, prevState) {
  }

  selectItem(e, index){
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    let item = this.state.data[index]
    this.setState({
      intervalId: intervalId ,
      itemSelected: index,
      data: update(this.state.data,
        {$splice: [[0, 0, item],[index + 1, 1]]
      })
    })

    let reg = new RegExp("<.[^>]*>", "gi" );
    let tuileName = this.state.data[index].title.replace(reg, " " );
    var ga = ReactGA.ga();
    ga('send', 'event', {
        eventCategory: tuileName,
        eventAction: 'click',
        eventLabel: 'tuiles H-Store'
    })

  }
  deselectItem(){
    this.setState({
      itemSelected: null,
      overflow:null
    })
  }
  modalEffect(index, e){
    if (e.target.className !== 'close'){
      this.setState(prevState => ({
        zooom:index,
        modalopened:true,
        params: {
          ...prevState.params,
          initialSlide: index,


        }

      }))
    }

  }
  modalEffectOff(e){
    if(e.target.className.indexOf('priceModal') !== -1) this.setState({priceModal:false})
    if(e.target.className.indexOf('swiper-pagination-bullet') === 0
    || e.target.className.indexOf('swiper-button-next') === 0
    || e.target.className.indexOf('swiper-button-prev') ===0 ) return
    if(e.target.className.indexOf('modalSlider') !== -1
    || e.target.className.indexOf('') !== -1) this.setState({modalopened:false})
    this.setState({
      zooom:false

    })
  }

  loadData ()  {
    let component = this
    fetch( process.env.PUBLIC_URL + this.props.jsonPath, {
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

         // Examine the text in the response
         response.json().then(function(data) {
            component.setState({
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
    const {data, itemSelected, overflow} = this.state
	  const jsonPath = '/json/dataBannerHSTORE.json'

    return (
		<div>
  		<div className={itemSelected === null ? "hStoreBand" : " tight  hStoreBand"} >
    		<div className="marketplace__container">
      		<div className="hStoreBand-title">
        		<div className="hStoreBand-mainTitle">Bienvenue dans le <span className="secondarycolor">H-Store</span></div>
        		<div className="hStoreBand-phrase">Catalogue d’applications connectables à EBP Horizon</div>
      		</div>

    		    <div className={itemSelected === null ? "hStoreBand-text secondarycolor" : " hide  hStoreBand-text secondarycolor"} >
              Créez une solution qui vous ressemble !
            </div>

    		</div>
  		</div>

		<div className={itemSelected === null ? "marketplace__edito" : " hide  marketplace__edito"}>

		  <div className={itemSelected === null ? "hStore-triangle" : " hide  hStore-triangle"}></div>
  		  <div className="edito_content">
      		<div className={itemSelected === null ? "marketplace__container" : " wide  marketplace__container"}>
        		<ul>
        		  <li><i className="material-icons">check</i> Disponible pour les clients EBP Horizon OPEN</li>
        		    <li><i className="material-icons">check</i> Complétez votre outil EBP Horizon avec de nouvelles fonctionnalités</li>
        		      <li><i className="material-icons">check</i> Gagnez du temps pour être plus performant </li>
        		        <li><i className="material-icons">check</i> Souscrivez et désactivez les applications depuis EBP Horizon, la connexion est automatique</li>
        		</ul>
          </div>
  		   </div>


    </div>
    <div className={this.state.modalopened ? "modalSlider opened": "modalSlider"} onClick={this.modalEffectOff.bind(this)}>
      <div className="modal-header">
        <button><span>×</span></button>
      </div>
      <SliderHStoreCapture data={this.state.data} params={this.state.params} itemSelected={itemSelected} jsonPath={this.props.jsonPath}/>
    </div>

		<div className={itemSelected === null ? "marketplace__container" : " wide  marketplace__container"}>


        <div
            className={itemSelected === null ? "marketplace__items" : "marketplace__items opened"}
            style={itemSelected === null ? null : overflow }
          >


            {!!data ? data.map((item, index) =>(
                  <div  key={index}
                        className={item.connected ? "connected marketplace__item" : "marketplace__item"}
                        onClick={(e) => this.selectItem(e, index)}
                        >
                        <figure>
                          <div key={index}
                        className={item.disponible ? "item__img" : "bientot item__img"}>
                            <img alt="" src={item.src}/>
                          </div>
                          <div className="item__heading opened " dangerouslySetInnerHTML={{__html: item.title}}/>
                          <figcaption>
                            <div className="item__heading" dangerouslySetInnerHTML={{__html: item.title}}/>
                            <div className="item__description" dangerouslySetInnerHTML={{__html: item.description}} />
                            <div className="item__link">
                              D&eacute;couvrir l&rsquo;aplication
                            </div>
                            <div className="item__connection">
                             <span>{item.connected ? "Connecté" : "Se connecter"}</span>
                            </div>
  						              <div className="item__disponible">
                             <span>{item.disponible ? "" : ""}</span>
                            </div>
                          </figcaption>
                        </figure>
                  </div>
                )
              ) : null
            }
            <div className="close-window" onClick={this.deselectItem.bind(this)}>
              <i className="material-icons">arrow_back</i>
            </div>

        </div>


        <div className={itemSelected === null ? "marketplace__item__blurb" : "marketplace__item__blurb opened"}>

          <div className="blurb__body">

            {!!data ? data.map((item, index) =>(
                    <div
                        key={index}
                        className={index === itemSelected ? 'blurb__body__item selected' : "blurb__body__item"}
                        >
                        {!!data[0].blurb ? data[0].blurb.map((item, index) =>{
          							if(item.className === "utilisation"){
                          return(
                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                    <div className="blurb__body__item__heading">
                                      <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                      <div>{item.title}</div>
                                    </div>
                                    <div className="item__description__container">
                                        {!!item.domElements ? item.domElements.map((elements, index) =>{
                                          return(
                                            <div key={index}>
                                              <div>{elements.title}</div>
                                              <ol className="square__list">
                                                {!!elements ? elements.elementol.map((elementol, index) =>{
                                                    return(
                                                      <li key={index} dangerouslySetInnerHTML={{__html: elementol.innerText}}></li>
                                                    )
                                                  }
                                                ): null}
                                              </ol>


                                            </div>
                                          )
                                        }): null}
                                    </div>
                                </div>
                              )
                            }
                            if(item.className === "support"){
                              return(
                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                    <div className="blurb__body__item__heading">
                                      <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                      <div>{item.title}</div>
                                    </div>
                                    <div className="item__description__container">
                                        {!!item.domElements ? item.domElements.map((elements, index) =>{
                                          return(
                                            <div key={index}>

                                              <div>{elements.title}</div>


                                              <ul className="square__list">
                                                {!!elements ? elements.element.map((element, index) =>{
                                                    return(
                                                      <li key={index} dangerouslySetInnerHTML={{__html: element.innerText}} />
                                                    )
                                                  }
                                                ): null}
                                              </ul>
                                            </div>
                                          )
                                        }): null}

										{!!item.textelibrehtmlsupportclient ? item.textelibrehtmlsupportclient.map((elements, index) =>{
                                          return(
                                            <div key={index}>
										<span className="supportdescription">
                                                {!!elements ? elements.element.map((element, index) =>{
                                                    return(
                                                      <span key={index} className="supportdescription" dangerouslySetInnerHTML={{__html: element.description}}/>
                                                    )
                                                  }
                                                ): null}
                                              </span>

                                            </div>
                                          )
                                        }): null}


                                    </div>
                                </div>
                              )
                            }
                            if(item.className === "qui"){
                              return(
                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                    <div className="blurb__body__item__heading">
                                      <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                      <div>{item.title}</div>
                                    </div>
                                    <div className="item__description__container">

									{!!item.domElements ? item.domElements.map((elements, index) =>{
                                          return(
                                            <div key={index}>
                                              {!!elements ? elements.element.map((element, index) =>{
                                                  return(
                                                    <div key={index} className="quidescriptionhtml__container" dangerouslySetInnerHTML={{__html: element.innerText}}/>
                                                  )
                                                }
                                              ): null}
                                            </div>
                                          )
                                        }): null}

                                        <div className="quidescriptionhtml__container" dangerouslySetInnerHTML={{__html: item.quidescription}}/>
                                    </div>
                                </div>
                              )
                            }
                            if(item.className === "price"){
                              return(
                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                    <div className="blurb__body__item__heading">
                                      <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                      <div>{item.title}</div>
                                    </div>
                                    <div className="item__description__container">



									                  {!!item.domElements ? item.domElements.map((elements, index) =>{
                                        return(
                                          <div key={index} className="price__container">
                                            {!!elements ? elements.element.map((element, index) =>{
                                              /**************************************/
                                              if(element.className=== 'item__captures'){

                                                return(
                                                    <div key={index}>
                                                      <div className="img___zoomed" onClick={()=>this.setState({priceModal:true})}>
                                                        <img key={index} alt="" src={element.element[0].src}/>
                                                      </div>
                                                      <div
                                                        className={this.state.priceModal ? "priceModal opened": "priceModal"}
                                                        onClick={this.modalEffectOff.bind(this)}
                                                      >
                                                        <div className="modal-header" onClick={()=>this.setState({priceModal:false})}><button><span>×</span></button></div>
                                                        <div className="img___zoomed">
                                                          <img key={index} alt="" src={element.element[0].src}/>
                                                        </div>
                                                      </div>

                                                    </div>

                                                    )
                                              }
                                              if(element.className=== 'description'){
                                                return(

                                                      <div key={index} className="description" dangerouslySetInnerHTML={{__html: element.innerText}}/>

                                                    )
                                                }
                                                if(element.className=== 'price__container'){
                                                  return(
                                                      <div key={index} className="price__container" dangerouslySetInnerHTML={{__html: element.innerText}}/>

                                                    )
                                                }



                                              }
                                            ): null}
                                          </div>
                                        )
                                      }
                                    ):null}
                                    </div>
                                </div>

                              )
                            }
                            if(item.className === "benefit"){
                              return(
                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                    <div className="blurb__body__item__heading">
                                      <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                      <div>{item.title}</div>
                                    </div>
                                    <div className="item__description__container">
                                      {!!item.domElements ? item.domElements.map((elements, index) =>{
                                          return(
                                            <div key={index} className="blurb__pictos">
                                              {!!elements ? elements.element.map((element, index) =>(
                                                  <figure key={index} className="blurb__picto">
                                                    <img alt="" src={element.picto}/>
                                                    <figcaption>
                                                        {element.innerText}
                                                    </figcaption>
                                                  </figure>
                                                )
                                              ): null}
                                            </div>
                                          )
                                        }
                                      ):null}
                                    </div>
                                  </div>
                              )


                            }
                            if(item.className === "what"){

                              return(

                                <div
                                    key={index}
                                    className={`blurb__body__item__  ${item.className}`}
                                  >
                                  <div className="blurb__body__item__heading">
                                    <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                    <div>{item.title}</div>
                                  </div>


                                  <div className="item__description__container">
                                    {!!item.domElements ? item.domElements.map((elements, index) =>{
                                      return(
                                        <div key={index} className={elements['className']}>
                                            {!!elements.element ? elements.element.map((element, index)=> {

                                              if(!!element.src){
                                                let src = element.src
                                                let ext = src.substring(src.lastIndexOf('.') + 1)
                                                let exts =['jpg', 'jpeg', 'png', 'svg']
                                                if(exts.indexOf(ext) !== -1){
                                                  return(
                                                      <div key={index}
                                                           className={this.state.zooom === index ? ' blurb__item__img' : "blurb__item__img"}
                                                           >
                                                           <div>
                                                             <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                                           </div>
                                                           <div className="img___zoomed">
                                                              <div className="overlay" onClick={this.modalEffect.bind(this, index)}></div>
                                                              <img alt="" src={src}/>
                                                           </div>


                                                      </div>

                                                  )
                                                }
                                                else{
                                                  return(
                                                    <div key={index}
                                                         onClick={this.modalEffect.bind(this, index)}
                                                         className={this.state.zooom === index ? 'zooom blurb__item__img' : "blurb__item__img"}
                                                         >
                                                         <div className="video__btn"></div>
                                                         <div>
                                                           <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                                         </div>
                                                         <div className="img___zoomed videoWrapper">
                                                            <div className="overlay" onClick={this.modalEffect.bind(this, index)}></div>
                                                            <iframe src={src}></iframe>
                                                         </div>
                                                    </div>
                                                  )
                                                }
                                               }
                                              if(!!element.innerText){

                                                return(
                                                  <div key={index} className="blurb__desciption">
                                                       <div>
                                                         <div className="close" onClick={ this.modalEffectOff.bind(this)}></div>
                                                       </div>
                                                       <div>
                                                          <ul className="nostyle">
                                                            <li className="description__title puce">{element.title}</li>
                                                            <li className="description__innerText" dangerouslySetInnerHTML={{__html: element.innerText}}></li>
                                                          </ul>

                                                       </div>
                                                  </div>
                                                )

                                              }
                                            }) : null}

                                        </div>
                                      )}
                                    ): null}

                                  </div>

                                </div>
                              )
                            }
                          }
                        ) : null}
                  </div>
                )
              ) : null
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*<div
  className={this.state.modalopened ? "modalSlider opened": "modalSlider"}
  onClick={this.modalEffectOff.bind(this)}

  >
  <div className="modal-header">
    <button><span>×</span></button>
  </div>
  {!!item.domElements ? item.domElements.map((elements, index) =>{
    if(elements.className === "item__captures"){

      return(
        <div key={index}>
        <Swiper key={index} {...this.state.params}>
          {!!elements.element ? elements.element.map((element, index)=> {
            if(!!element.src){
              let src = element.src
              let legend = element.legend
              let ext = src.substring(src.lastIndexOf('.') + 1)
              let exts =['jpg', 'jpeg', 'png', 'svg']
              if(exts.indexOf(ext) !== -1){
                return(
                    <div key={index}
                         className={this.state.zooom === index ? "" : ""}
                         >
                         <div>
                            <img alt="" src={src}/>
                            <legend>{legend}</legend>
                         </div>
                    </div>

                )
              }
             }

          }) : null}
        </Swiper>
        </div>

      )
    }
  }): null}
</div>*/
