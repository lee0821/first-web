console.log('swiper.js')


var swiper = document.getElementById('swiper');
var swiperBox = swiper.getElementsByClassName('swiper-box')[0]
var dot = swiper.getElementsByClassName('dots')

// function turnPage(num){
//     var now = Math.round(swiperBox.offsetLeft/swiper.offsetWidth)
//     console.log(now)
//     if(now <= -4){
//         swiperBox.style.left = '0%'
//     }else{
//         swiperBox.style.left = (now + num) * 100 +'%'
//     }
// }



function turnPage(num){
    var now = Math.round(swiperBox.offsetLeft/swiper.offsetWidth)
    var next = now + num
    if(next < -4){
        next = 0
    }else if(next > 0){
        next = -4
    }
    swiperBox.style.left = next*100+'%'
    
}

var timer = setInterval(function(){console.log(11)},1000)
function autoPlay(btn){
    if(btn){
        timer()
    }clearInterval(timer)
}

autoPlay(1)

function mouseOver(){
    console.log(event)
    autoPlay
}