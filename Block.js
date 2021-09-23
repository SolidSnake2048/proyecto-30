class Block{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png");
      this.visiblity=255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      if(this.body.speed>3){
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
    }
}
