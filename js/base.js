class Base extends baseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        Matter.body.setAngle(this.body, angle);
    }
}