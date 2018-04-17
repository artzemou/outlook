import React from 'react';
import Swiper from 'react-id-swiper';
import logo from '../img/logo.svg';
import HelloWord from '../components/HelloWorld.js'
import Abonnements from '../components/Abonnements.js'

export default class ReactSwipeComponentHome extends React.Component {
  render() {
    const params = {
      /*pagination: '.swiper-pagination',*/
      paginationClickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 52,
      slidesPerView : 1,
      slidesPerGroup: 1,
	    keyboardControl : true,
      parallax : true,
      mousewheelControl: true,
      simulateTouch:true,
	    breakpoints:{
                1000:{
                    slidesPerView : 1,
                },
                840:{
                    slidesPerView : 1,
      }
	  },
      grabCursor: true,
    }
	return(
	<Swiper {...params}>
      <div>
	       <Abonnements/>
	    </div>
      <div>
	       <Abonnements/>
	    </div>
      <div>
	       <Abonnements/>
	    </div>


    </Swiper>
	)

  }
}
