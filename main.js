// set a global variable for canvas
const canvas = document.querySelector("canvas");

// set the canvas width and height to match the windows
const resize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  }
  
  //call the canvas resize
  resize()

class DrawIt{
	constructor(dotLength, x,y, dotSize, color){
		this.dotLength = dotLength
		this.x = x
		this.y = y
		this.dotSize = dotSize
		this.color = color
	}
	setTheCanvas(){
		if (canvas.getContext){
			const ctx = canvas.getContext('2d')
			ctx.fillStyle ='blueviolet'
			ctx.font = '1.5em Arial'
			ctx.textAlign ='center'
			ctx.fillText('Do-a-Dot Art Marker',canvas.width / 2, canvas.height / 2)
		}
		else{
			console.log('Canvas-Unspported')
		}
	}
	drawX(){
		if (canvas.getContext){
			const ctx = canvas.getContext('2d')
			const size = this.dotLength
			ctx.fillStyle = this.color
			for (let x = this.x; x < canvas.width; x+= size){
				let x = this.x
				const xAxisDraw = setInterval(() => {
				ctx.beginPath()
				ctx.arc(x,this.y,this.dotSize,0, Math.PI * 2)
				ctx.fill()
				x+= size
			if (x>= canvas.width - 30){
				clearInterval(xAxisDraw)
			}
		  	}, 200)}
		}
		else {
			console.log('Canvas-Unspported')
		}
	}
	drawY(){
		if (canvas.getContext){
			const ctx = canvas.getContext('2d')
			const size = this.dotLength
			ctx.fillStyle = this.color
			for (let y = this.y; y < canvas.height; y+= size){
				let y = this.y
				const yAxisDraw = setInterval(() => {
				ctx.beginPath()
				ctx.arc(this.x,y,this.dotSize,0, Math.PI * 2)
				ctx.fill()
				y+= size
			if (y>= canvas.height - 30){
				clearInterval(yAxisDraw)
			}
		  	}, 200)}
		}
		else {
			console.log('Canvas-Unspported')
		}
	}
}

//lets create and draw some circles!!
let draw1 = new DrawIt(40,25,50,15)
draw1.setTheCanvas()
draw1.drawX()
draw1.drawY()

let draw2 = new DrawIt(30, canvas.width - 30, 50, 10,'cornflowerblue')
draw2.drawY()

let draw3 = new DrawIt(60, 25, canvas.height -30, 20)
draw3.drawX()
