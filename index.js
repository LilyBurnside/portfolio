'use strict';
$(document).ready(function(){
  let flag = 0;
  $('#next').on('click', function(){
    if(flag === 0)
    {
      $('.plant-app').css('transform','translate(1000%)');
      $('.plant-app').css('display', 'none');
      flag = 1;
    }
    else if(flag === 1)
    {
      flag = 2;
    }
    else if(flag === 2)
    {
      flag = 0;
    }
  });
  $('#prev').on('click', function(){
    if(flag === 0)
    {
      flag = 2;
    }
    else if(flag === 1)
    {
      $('.plant-app').css('transform', 'translate(-1000%)');
      $('.plant-app').css('display', 'inline-block');
      flag = 0;
    }
    else if(flag === 2)
    {
      flag = 1;
    }
  });    
});

function handleMenuClick() {
  $('li').on('click', function(){
    $('input').prop('checked', false);
  });
}

$(handleMenuClick);