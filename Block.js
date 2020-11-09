class Block{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;

        if(this.body.speed < 3){
        push();
        //translate(pos.x, pos.y);
        strokeWeight(7);
        fill ("red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(pos.x, pos.y, this.width, this.height);
     pop();
        }
      }
}