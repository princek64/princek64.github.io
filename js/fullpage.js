document.addEventListener('DOMContentLoaded', () => {

    new fullpage('#fullpage', {
        lazyLoading: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6']

    });
    })



//adding the action to the button
$(document).on('click', '#pageA', function(){
  fullpage_api.moveTo('page1');
});

$(document).on('click', '#pageE', function(){
fullpage_api.moveTo('page2');
});

$(document).on('click', '#pageP', function(){
fullpage_api.moveTo('page3');
});

$(document).on('click', '#pageD', function(){
fullpage_api.moveTo('page4');
});

$(document).on('click', '#pageS', function(){
fullpage_api.moveTo('page5');
});

$(document).on('click', '#pageI', function(){
fullpage_api.moveTo('page6');
});

