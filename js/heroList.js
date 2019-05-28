console.log('heroList.js')

var box = document.getElementsByClassName('list')[0].getElementsByTagName('ul')[0]

function turn(w){
  if(w)box.style.left = '0px'    
  else box.style.left = '-100%'
}