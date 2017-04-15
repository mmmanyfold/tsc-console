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
initializeCount('#countdown', doomsday);
$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
});
