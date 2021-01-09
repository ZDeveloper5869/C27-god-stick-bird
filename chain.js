class Chain {
    constructor(joe,lenny) {
        var options={
    bodyA:joe,
    bodyB:lenny,
    length:100,
    stiffness:0.1,
        }
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display() {
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}