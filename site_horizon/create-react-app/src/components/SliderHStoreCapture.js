import React, { Component } from 'react';
import Swiper from 'react-id-swiper';


export default class SliderHStoreCapture extends Component {
	constructor(props){
    super(props);
    this.state = {
      data : [],
      itemSelected: this.props.itemSelected,
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

      }
    }
  }

	componentWillReceiveProps(nextProps){
		//console.log(nextProps.itemSelected)
		this.setState(prevState => ({
			itemSelected: nextProps.itemSelected,
			params: nextProps.params,
			data: nextProps.data
		}))

	}

  render() {
		const {data, itemSelected} = this.state

		return(
			<div >
				{!!data ? data.map((element, index) =>{
						return(
							<div key={index} className={itemSelected === index ? "" : "hide"}>
								{data[0].blurb.map((element, index) =>{

										return(
											<div key={index}>
													{element.domElements.map((element, index) =>{
															if(element.className === "item__captures"){
																	return(
																		<Swiper key={index}  {...this.state.params}>
																			{element.element.map((element, index) =>{
																				return(
																						<div key={index}>
																							<img alt="" src={element.src}/>
																							<legend>{element.legend}</legend>
																						</div>
																				)
																			})}
																		</Swiper>
																	)
															}

														}
													)}
											</div>
										)
									}
								)}
							</div>
						)
					}
				): null}
			</div>
		)

  }
}
