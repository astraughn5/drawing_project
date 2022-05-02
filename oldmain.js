// add an event listener to load drawing initially
window.addEventListener('load',draw)
// document.querySelector('button').addEventListener('click',draw)

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
//   window.addEventListener('resize', resize)
//   window.addEventListener('resize', draw)


//what to draw
function draw(){
if (canvas.getContext){
	const ctx = canvas.getContext('2d')
  	ctx.fillStyle ='blueviolet'
	ctx.font = '50px Arial'
	ctx.textAlign ='center'
	ctx.fillText('Do-a-Dot Art Marker Animation Practice',canvas.width / 2, canvas.height / 2)
  	const size = 30
	for (let x = 30; x < canvas.width; x+= size){
		let x = 30
  		const right = setInterval(() => {
		// ctx.clearRect(0,0,canvas.width,canvas.height)
		ctx.beginPath()
		ctx.arc(x,60,25,0, Math.PI * 2)
		ctx.fill()
		x+= size
	if (x>= canvas.width - 30){
		clearInterval(right)
	}
  }, 200)}
  let y = 60
  x = canvas.width - 30
  	for (let y = 60; y < canvas.height; y+= size){
		let y = 60
		const rightDown = setInterval(() => {
  		// ctx.clearRect(0,0,canvas.width,canvas.height)
  		ctx.beginPath()
  		ctx.arc(x,y,25,0, Math.PI * 2)
  		ctx.fill()
  		y+= size
  			if (y>= canvas.height - 18){
  				clearInterval(rightDown)
  			}
  		}
  		,200)}

	let z = 60
	for (let z = 60; z < canvas.height; z+= size){
		let z = 60
		const leftDown = setInterval(() => {
		// ctx.clearRect(0,0,canvas.width,canvas.height)
		ctx.beginPath()
		ctx.arc(30,z,25,0, Math.PI * 2)
		ctx.fill()
		z+= size
			if (z>= canvas.height - 18){
				clearInterval(leftDown)
			}
		}
		,200)}
		
		ctx.fillStyle ='cornflowerblue'
		for (let x = 30; x < canvas.width; x+= size){
			let x = 30
			  const right = setInterval(() => {
			// ctx.clearRect(0,0,canvas.width,canvas.height)
			ctx.beginPath()
			ctx.arc(x,canvas.height - 30,25,0, Math.PI * 2)
			ctx.fill()
			x+= size
		if (x>= canvas.width - 30){
			clearInterval(right)
		}
	  }, 200)}
		
	}
else {
  console.log('Canvas-Unspported')
}
}