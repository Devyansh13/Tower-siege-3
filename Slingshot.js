class Rope{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){

        if(this.sling.bodyB){
            var pointA = this.sling.pointA;
            var bodyB = this.sling.bodyB.position;
        
            var pointA = this.pointA;
            var bodyB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
            strokeWeight(3);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop();
        }
        }
           
        
        attach(body){
            this.sling.bodyB = body;
        }
        
        fly(){
            this.sling.bodyB = null; 
               
        }
    }