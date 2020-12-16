    class Division{
    
        constructor(x,y,w,h){
        var o={
            isStatic:true
            }
        this.body=Bodies.rectangle(x,y,w,h,o);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
        }

        display(){
        var  pos =this.body.position;
        push();
        noStroke();
        fill(mouseX,mouseY,mouseX/mouseY);
        var pos=this.body.position;
        //translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
        }

    }