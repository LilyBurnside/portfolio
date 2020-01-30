'use strict';

function handleMenuClick() {
  $('li').on('click', function(){
    $('input').prop('checked', false);
  });
}

$(handleMenuClick);