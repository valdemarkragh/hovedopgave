$(document).ready(function() {
    if($('body').attr('id') === 'ships') {
        $('.ships').addClass('active');
    } else if($('body').attr('id') === 'arrangements') {
        $('.arrangements').addClass('active');
    } else if($('body').attr('id') === 'gallery') {
        $('.gallery').addClass('active');
    }
})