//Create variables here
var dog,happyDog;
var foodS,foodStock,database;

function preload()
{
	//load images here
   dogImg= loadImage("images/doglmg.png");
   happyDogImg= loadImage("images/doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(200,220)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  dog.addImage(dogImg)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



