class Particle{
    
    constructor(x,y,r){
    var o={
       restitution:0.4       
    }
    
    this.body=Bodies.circle(x,y,r,o);
    this.r=r;
    this.color=color(random(0,255), random(0,255), random(0,255));
    World.add(world,this.body);
    }

    display(){
    var  pos =this.body.position;

    push();
    fill(this.color);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();
    }

}