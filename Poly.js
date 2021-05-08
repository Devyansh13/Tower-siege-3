class Polygon{
    constructor(x, y, radius, angle) {
        var options = {
          
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
        this.image = loadImage("Hexagon-Yellow-PNG.png");
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        // ellipseMode(RADIUS); 
        // fill("blue")
        // ellipse(0,0,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
      }
}