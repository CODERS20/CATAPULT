class Slingshot{

    constructor(bodyA,pointB){

        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'length': 10,
            'stiffness': 0.2
        }
       this.sling = Constraint.create(options) 
       this.bodyA = bodyA;
       this.pointB = pointB;
       World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
        strokeWeight(8);
        line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    }

    fly(){
    
    this.sling.bodyA = null;

   }

}
