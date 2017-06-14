const min = -58;
const max = 103;

Image0=new Image(800,800)
Image0.src="img/2-tour.jpg"
Image1=new Image(800,800)
Image1.src="img/2-tour-van.jpg"
Image2=new Image(800,800)
Image2.src="img/2-tour-win.jpg"
Image3=new Image(800,800)
Image3.src="img/2-tour-mtl.jpg"
Image4=new Image(800,800)
Image4.src="img/2-tour-tor.jpg"
$(document).ready(function(){document.tour.src=Image0.src;return true;});
function van(){document.tour.src=Image1.src;return true;}
function win(){document.tour.src=Image2.src;return true;}
function mtl(){document.tour.src=Image3.src;return true;}
function tor(){document.tour.src=Image4.src;return true;}
function og(){document.tour.src=Image0.src;return true;}

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
$(document).mousemove(function(e){
  const w = window.innerWidth;
  const deg = map_range(e.pageX, 0, w, min, max);
  $('.meter').css('transform', `rotate(${deg}deg)`);
});
$('img[usemap]').rwdImageMaps();
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function initializeCount(id, endtime){
  var countdown = document.querySelector(id);
  var daysSpan = countdown.querySelector('.days');
  var hoursSpan = countdown.querySelector('.hours');
  var minutesSpan = countdown.querySelector('.minutes');
  var secondsSpan = countdown.querySelector('.seconds');
  function updateCount(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }
  updateCount();
  var timeinterval = setInterval(updateCount,1000);
}
var doomsday = 'April 17 2019 06:06:06 GMT-0700';
initializeCount('.countdown', doomsday);
