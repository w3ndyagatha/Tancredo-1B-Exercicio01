function setup() {
  createCanvas(600, 600);
  background("pink");
} 
 
function draw() {
  
 fill("black");
 stroke("white");

 if(mouseIsPressed){
    rect(mouseX,mouseY,30,40);
 } 
}



   
