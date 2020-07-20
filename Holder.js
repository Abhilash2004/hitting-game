class Holder {
    constructor(bodyA,bodyB)
    {
    var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10
    }

    
    this.holder=Constraint.create(options)
    World.add(world,this.holder)
    }

    fly (){
        this.holder.bodyA=null   
     }
    
    display() {
    var pointA =this.holder.bodyA.position
    var pointB =this.holder.bodyB.position
    //strokeWeight(5)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    
    }