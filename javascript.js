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
        // translateY: [
        //     {value: 500, duration: 300},
        //     {value: 0, duration: 100},
        //     {delay: function(el, index) {
        //         return index * 200;
        //       }}
        // ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        opacity: '0.5',
        delay: function(el, i, l){return i*50}
        // loop: true
    });


//     let container = document.querySelector('#container');
// let ballLength = 160;

// for(let i = 0; i < ballLength; i++){
//   let div = document.createElement('div');
//   let color = 'red';
//   div.classList.add('ball');
//   if(i % 2) color = 'blue';
//   div.classList.add('ball-' + color);
//   container.appendChild(div);
// }

// let ballAnimation = anime({
//   targets: '.ball',
//   translateX: {
//     value: (element, index) => {
//       let cos = Math.cos(10 * Math.PI / (ballLength - 1) * index);
//       return cos * (220 * index / (ballLength - 1));
//     },
//     duration: 1
//   },
//   translateY: {
//     value: (element, index) => {
//       let sin = Math.sin(10 * Math.PI / (ballLength - 1) * index);
//       return sin * (220 * index / (ballLength - 1));
//     },
//     duration: 1
//   },
//   scale: {
//     value: [0, 1],
//     delay: (element, index) => {
//       return 600 * index / (ballLength - 1);
//     },
//     duration: 200
//   },
//   opacity: {
//     value: (element, index) => {
//       return 1; //1 - (index / (ballLength - 1));
//     },
//   },
//   direction: 'normal',
//   elasticity: 700,
//   loop: false
// });

// let containerAnimation = anime({
//   targets: '#container',
//   rotate: 360,
//   duration: 666,
//   direction: 'normal',
//   easing: 'linear',
//   elasticity: 0,
//   loop: false
// });

// console.log(anime.easings);
});