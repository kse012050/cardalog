$(document).ready(function(){

    $(window).scroll(function(){
        $(this).scrollTop() > 0 ?
            $('header').addClass('active') : 
            $('header').removeClass('active');

        $('[data-dropbox="area"]').slideUp();
    })

    // 언어 텝 메뉴
    $('body').click(function(){
        $('[data-dropbox="area"]').stop().slideUp();
    })
    $('[data-btn="dropbox"]').click(function(e){
        e.stopPropagation();
        $('[data-dropbox="area"]').stop().slideToggle();
    })
    $('[data-dropbox="area"]').click(function(e){
        e.stopPropagation();
    })
})