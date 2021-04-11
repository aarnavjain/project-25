class Paper {
    constructor(x,y, radius){
        this.image=loadImage("paper.png")
    var options ={ 
        isStatic: false,
    'restitution': 0.4,
    'friction': 0.5,
    'density': 1
        }
 this.body = Bodies.circle(x,y,radius,options);
 this.radius = radius

 World.add(world, this.body);

    }
    display(){
        imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, this.radius*2+50, this.radius*2+50);
    }
}