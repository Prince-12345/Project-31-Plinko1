        class Ground{
        constructor(x,y,width,height){
        var options={

            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        }

        display(){
           
        push();
       
        noStroke();
        fill(mouseX,mouseY,mouseX/mouseY);
       
        
        var pos=this.body.position;
        //translate(pos.x,pos.y);
        rectMode(CENTER);
        
      
        rect(pos.x,pos.y,this.width,this.height);
pop();
        }


        }