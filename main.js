// add an event listener to load drawing initially
window.addEventListener('load',draw)
document.querySelector('button').addEventListener('click',draw)

// set a global variable for canvas
const canvas = document.querySelector("canvas");

// set the canvas width and height to match the windows
const resize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  }
  
  //call the canvas resize
  resize()

  // whenever the window is resized, the resize function and draw function is called
  window.addEventListener('resize', resize)
//   window.addEventListener('resize', draw)


//what to draw
function draw(){
if (canvas.getContext){
	const ctx = canvas.getContext('2d')
  ctx.fillStyle ='orange'
  const size = 30
  
  for (let x = 0; x < canvas.width - 14; x+= size){
  let x = 0
  const id = setInterval(() => {
	ctx.clearRect(0,0,canvas.width,canvas.height)
	ctx.beginPath()
	ctx.arc(x,60,25,0, Math.PI * 2)
	ctx.fill()
	x+= size

	if (x>= canvas.width - 18){
		clearInterval(id)
	}
  }, 200)}

}
else {
  console.log('Canvas-Unspported')
}
}

// let circles = []
// let started = false
// function play(){
// 	circles.push(0)

// 	if (!started){
// 		started = true
// 		setInterval(() => {
// 			tick()
// 		},200)
// 	}
// }
// function tick(){
// 	ctx.clearRect(0,0,canvas.width,canvas.height)

// 	circles.forEach(x => {
// 		ctx.beginPath()
// 		ctx.arc(x,60,25,0, Math.PI * 2)
// 		ctx.fill()
// 	})
// 	circles = circles.map(x => x+= size)
// 	.filter(x => x < canvas.width - 30)
// 	}


// for (let i = 0; i < 2; i++){
// 	ctx.beginPath()
// 	let x = 100 + i * 300
// 	let y = 100 + i * 0
// 	let radius = 50
// 	let startAngle = 0
// 	let endAngle = Math.PI * 2
	
// 	ctx.arc(x,y,radius,startAngle, endAngle)
// 	ctx.fill()