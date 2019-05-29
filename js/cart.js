



var cart = document.getElementById('carBtn')
var shopNum = 1
var cartInfo=[]

function cartCount(num){
    shopNum = shopNum + num
    cart.innerHTML = shopNum;
}

cart.addEventListener('click',()=>{
    if(!shopNum){
        alert('没有商品')
    }else{
        console.log('cart',this)
    }
})

function cartGet(name,price){
    cartCount(1);
    var rebuild = false
    var newInfo = {}
    newInfo.name = name
    newInfo.price = price
    newInfo.count = 0
    console.log(newInfo)
    rebuild = chargeTS(name);
    console.log(rebuild);
    (rebuild || !cartInfo.length) &&cartInfo.push(newInfo)
    console.log(cartInfo)
}

function chargeTS(name){
    // console.log(rebuild)
    for(let i=0;i< cartInfo.length;i ++){
        console.log(name == cartInfo[i].name)
        if(! cartInfo.length) return false
        else if(name == cartInfo[i].name){
            cartInfo[i].count ++;
            return false
        }else{
            if(i == cartInfo.length)  return true 
        }
    }
}



function test(num){
    for(let i=0;i<=num;i ++){
        // console.log(cartInfo.length)
        if(i == 3){
            console.log(11)
        }else{
            console.log(22)
        }
    }
}