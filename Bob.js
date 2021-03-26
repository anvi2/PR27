class Bob{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution':1,
            'friction': 0,
            'density':7.6,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
          World . add (world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        strokeWeight(5);
        stroke("black");
        fill(300,30,100);
        ellipseMode (RADIUS);
        ellipse(0,0,this.radius);
        pop ();
    }


}