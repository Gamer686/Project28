class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=450;
        this.height=600;
    
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(this.x,this.y,20,200,{isStatic:true})
        
        World.add(world,this.body);
        
        
        
    }
    display(){
    
        push()
        
        fill(255)
        imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y-80,this.width,this.height)
        pop()
    }
}