class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            bodyA:bodyA,bodyB:bodyB,
            length:300,
            pointB:{x:this.offsetX,y:this.offsetY}
            

        }
        
        this.chain = Matter.Constraint.create(option)
        World.add(world,this.chain);
    }
    display(){
        var pa = this.chain.bodyA.position
        var pb =  this.chain.bodyB.position
        strokeWeight(2)
        stroke("white");
        line(pa.x,pa.y,pb.x+this.offsetX,pb.y+this.offsetY)
    }
}