window.addEventListener('load',draw)

function draw(){
const canvas = document.querySelector('#canvas')

if (canvas.getContext){
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000'
  ctx.fillRect(10,10,1500,100)
}
else {
  console.log('Canvas-Unspported')
}
}
