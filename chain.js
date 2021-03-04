class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 15,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(body)
    {
     this.sling.bodyA = body;
     console.log("checking");
    }


    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("yellow");

            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
            
            pop();
        }
    }
    
}

