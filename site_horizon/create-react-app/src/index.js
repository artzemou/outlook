import React from 'react';
import ReactDOM from 'react-dom';

import './css/grillade.min.css';
import './css/App.css';

import App from './App';

import registerServiceWorker from './js/registerServiceWorker';
import scrollToSection from './js/scrollToSection';
import addTrackTags from './js/addTrackTags';
import eventTracking from './js/eventTracking';


import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render(
    <App/>
      , document.getElementById('root'), function(){
      setTimeout(function(){

        $('.loader-container').hide(500)
        $('body').css( {overflow:'auto'})
        scrollToSection()
        if(window.location.pathname === '/en-savoir-plus'){
          setTimeout(function(){
            $('#en-savoir-plus_target').trigger('click')
          },250)

        }
        $('.section, main, #footer').addClass('open')

        $('.cta a').on('click', function(){
          let target, location
          target = $(this).attr('target')
          location = $(this).attr('href')
          target === undefined ? window.location = location : window.open(location , target)
        })
      },150)
        addTrackTags()
        eventTracking()
      }
)



registerServiceWorker();
