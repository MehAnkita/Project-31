class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("WalkingFrame/walking_1.png","WalkingFrame/walking_2.png","WalkingFrame/walking_3.png",
        "WalkingFrame/walking_4.png","WalkingFrame/walking_5.png","WalkingFrame/walking_6.png",
        "WalkingFrame/walking_7.png","WalkingFrame/walking_8.png");
    
        this.umbrella = Bodies.circle(x,y,20,options);
        
        
        World.add(world, this.umbrella);
        
    }

    display(){
        var pos = this.umbrella.position;
       
        //rectMode(CENTER);
        animation(this.image,pos.x,pos.y+70,300,300);
    }
}