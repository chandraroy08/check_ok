var buttonimg
var sb
var bg
function preload(){
  buttonimg= loadImage("button.jpg")
  bgimg= loadImage("download.jpg")

}


function setup() {
  createCanvas(1600,800);
  sb = createSprite(200,400)
  sb.addImage(buttonimg)
  bg= createSprite(200,400)
  bg.addImage(bgimg)
  bg.scale=2.0
  bg.visible= false
}

function draw() {
  background(255,255,255);
  if(mousePressedOver(sb)){
    bg.visible= true
}
  drawSprites();
}