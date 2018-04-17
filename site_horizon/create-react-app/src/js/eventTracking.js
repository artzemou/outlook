import $ from 'jquery';
window.jQuery = window.$ = $;
var ReactGA = require('react-ga');
ReactGA.initialize('UA-873612-18');

export default function eventTracking(e){
  var ga = ReactGA.ga();
  var pageName = window.location.pathname;
  if (pageName === "/")
      pageName = 'accueil';
  pageName = pageName.replace('/', '');

  $('.btn-tracked').on('click', function() {
    var btnName = $(this).text()
      ga('send', 'event', {
          eventCategory:  btnName + ' page ' + pageName,
          eventAction: 'click',
          eventLabel: pageName
      })
  });

  $('.btn-tracked-menu').on('click', function() {

    var btnName = $(this).find("a").text()
    if(btnName === 'H-store'){
      ga('send', 'event', {
          eventCategory:  btnName + ' ' + pageName,
          eventAction: 'click',
          eventLabel: btnName
      })
    }

  });
}
