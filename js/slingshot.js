class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 40,
            stiffness: 0.2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }
    attach(body){
        this.sling.bodyA = body
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        push()
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke(255);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        textSize(20)
        fill(255)
        text("Press space to re-attach the ball", 200, 50);
        pop();
    }
}