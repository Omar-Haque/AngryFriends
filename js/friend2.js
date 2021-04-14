class Friend2{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,this.body.density=0.3);
        this.radius = radius;
        this.image = loadImage("sprites/image3.jpg")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        circle(0,0,this.radius)
        pop()
    }
}