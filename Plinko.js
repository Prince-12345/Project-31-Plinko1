class Plinko{
    
    constructor(x,y,r){
    var o={
        isStatic:true
        }
    this.body=Bodies.circle(x,y,r,o);
    this.r=r;
    World.add(world,this.body);
    }

    display(){
    var  pos =this.body.position;
    push();
    noStroke();
    fill(mouseX,mouseY,mouseX/mouseY);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();
    }

}