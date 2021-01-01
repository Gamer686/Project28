class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=450;
        this.height=600;
        this.thickness=10;
        this.image=loadImage("tree.js")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
        this.leftWall=Bodies.rectangle(0,this.y-this.height/2,this.thicknessthis.height,{isStatic:false})
        this.rightWall=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:false})
        World.add(world,this.bottomBody);
        World.add(world,this.leftWall);
        World.add(world,this.rightWall);
    }
    display(){
        var posBottom=this.bottomBody.position;
        push()
        translate(posBottom.x,posBottom.y+10);
        fill(255)
        imageMode(CENTER)
        this.image(this.image,0,-this.height/2,this.width,this.height)
        pop()
    }
}