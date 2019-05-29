console.log('swiper.js')



var swiper = document.getElementById('swiper');
var swiperBox = swiper.getElementsByClassName('swiper-box')[0]
var dots = swiper.getElementsByClassName('dots')[0].getElementsByTagName('span')

function turnPage(num){
    var now = Math.round(swiperBox.offsetLeft/swiper.offsetWidth)
    var next = now + num
    if(next < -4){
        next = 0
    }else if(next > 0){
        next = -4
    }
    swiperBox.style.left = next*100+'%'
    dotsLight(next)
}

function dotsLight(now){
    var length = Math.round(swiperBox.offsetWidth/swiper.offsetWidth)
    for(let i=0;i < length;i ++){
        dots[i].className = ''  
    }
    dots[now*-1].className = 'light'
}

function autoPlay(btn){
    if(btn){
        timer = setInterval(()=>{turnPage(-1)},5000)
        // console.log(1)
    }else{
        clearInterval(timer)
    }
}

function dotsTap(){    
    for(let i=0;i<dots.length;i++){
        dots[i].addEventListener('click',()=>{  
            var now = Math.round(swiperBox.offsetLeft/swiper.offsetWidth)
            var index = now + i
            turnPage(-1*index)
        },false)
    }
}

swiper.addEventListener('mouseover',()=>{
    autoPlay(0)
})

swiper.addEventListener('mouseout',()=>{
    autoPlay(1)
})