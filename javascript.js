function portfolioPage() {
    $(".portfolio").css("display","block");
    console.log(".portfolio is now block");
}
$("#portfolio").click(portfolioPage);

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
// Wrap every letter in a span
// setTimeout(header, 1000);
// function header() {
//     $(".letters").css("visibility","visible");
//     $('.ml1 .letters').each(function(){
//         $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
//     });
    
//     anime.timeline({loop: false})
//         .add({
//         targets: '.ml1 .letter',
//         scale: [0.3,1],
//         opacity: [0,1],
//         translateZ: 0,
//         easing: "easeOutExpo",
//         duration: 1000,
//         delay: function(el, i) {
//             return 70 * (i+1)
//         }
//         }).add({
//         targets: '.ml1 .line',
//         scaleX: [0,1],
//         opacity: [0.5,1],
//         easing: "easeOutExpo",
//         duration: 1000,
//         offset: '-=875',
//         delay: function(el, i, l) {
//             return 80 * (l - i);
//         }
//         });
        // .add({
        // targets: '.ml1',
        // opacity: 0,
        // duration: 1000,
        // easing: "easeOutExpo",
        // delay: 1000
        // });
    // }