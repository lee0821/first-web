



var cartBtn = document.getElementById('carBtn')      //购物车按钮
var  cart = document.getElementsByClassName('cart')[0]  //购物车框架
var cartList = document.getElementById('cart-list') //购物车数据
var totalPriceShow = document.getElementsByClassName('show-price')[0] //隐藏按钮
var shopNum = 0
var totalPrice = 0
var cartInfo=[]

//统计商品总数
function cartCount(num){
  shopNum = shopNum + num
  cartBtn.innerHTML = shopNum;
}

cartBtn.addEventListener('click',()=>{
  if(!shopNum){
    alert('没有商品')
  }else{
    // console.log('cart',this)
    cart.style.display = 'block'
  }
})


// 计算商品   判断添加新的商品或者增加数量
function cartGet(name,price){
  cartCount(1);
  var newInfo = {}
  var rebuild = false
  newInfo.name = name
  newInfo.price = price
  newInfo.count = 1
  
  if(! cartList.innerHTML) newItem(newInfo)
  else{
    var lsitData = cartList.getElementsByTagName('div')

    for (let i = 0; i < lsitData.length; i++) {
      // var count = parseInt(lsitData[i].getElementsByTagName('span')[0].innerText)
    
      if(name == lsitData[i].name) {
        // console.log(lsitData[i].getElementsByTagName('span')[0].innerText)
        lsitData[i].getElementsByTagName('span')[0].innerHTML ++
        rebuild = true
      }}
    !rebuild && newItem(newInfo)
  }
  totalPriceSum()
}


// 创建新商品
function newItem(data){
  var parent = cartList
  var item = document.createElement('div')
  var count = document.createElement('span')

  item.innerHTML = data.name
  item.name = data.name
  item.price = data.price
  item.className = 'cart-item'
  count.innerHTML = data.count
  count.name = 'count'

  item.appendChild(count)
  buttonBox(item)
  parent.appendChild(item)
}


// 创建加减按钮
function buttonBox(parent){
  // var box = document.createElement('div')
  var addBtn = document.createElement('button')
  var deleteBtn = document.createElement('button')

  // box.className = 'btnbox'
  deleteBtn.name = 'delete'
  deleteBtn.className = 'cart-btn delete'
  addBtn.name = 'add'
  addBtn.className = 'cart-btn add'

  parent.appendChild(deleteBtn)
  parent.appendChild(addBtn)
}

// 商品加减按钮
cartList.addEventListener('click',()=>{
  var target = event.target
  var old = target.parentNode.childNodes[1]
  if(target.name == 'add'){
    old.innerHTML ++
  }else if(target.name == 'delete'){
    if(old.innerHTML == 1) {
      old.parentNode.parentNode.removeChild(old.parentNode)
      return
    }
    old.innerHTML --
  }
  totalPriceSum()
},true)

// 总价统计
function totalPriceSum(){
  var data = cartList.getElementsByClassName('cart-item')
  totalPrice = 0
  for (let i = 0; i < data.length; i++) {
    var item = data[i]
    totalPrice = totalPrice + parseInt(item.price) * parseInt(item.childNodes[1].innerText) 
  }
  totalPriceShow.innerHTML = totalPrice
}

// 隐藏cart
function hideCart(){
  cart.style.display = 'none'
}