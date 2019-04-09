$( document ).ready(function() {
    function portfolioPage() {
        $(".headshot").css("display","none");
        $(".portfolio").css("display","block");
    }
    $("#portfolio").click(function() {
        portfolioPage();
    });

    anime({
        targets: '.box',
        // translateX: [
        //     {value: 500, duration: 500},
        //     {value: 0, duration: 500}
        // ],
        rotate: {
            value: '3turn',
            easing: 'easeInOutSine'
        },
        opacity: '0.5',
        delay: function(el, i, l){return i*50}
        // loop: true
    });
});