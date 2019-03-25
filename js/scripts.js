$('#home-btn').on('click',function(){

    const home = $('#home').position().top;
    $('html, body').animate({
        scrollTop: home
    }, 700);
});
$('#about-btn').on('click',function(){

    const about = $('#about').position().top;
    $('html, body').animate({
        scrollTop: about
    }, 700);
});
$('#work-btn').on('click',function(){

    const work = $('#work').position().top;
    $('html, body').animate({
        scrollTop: work
    }, 700);
});
$('#contact-btn').on('click',function(){

    const contact = $('#contact').position().top;
    $('html, body').animate({
        scrollTop: contact
    }, 700);
});