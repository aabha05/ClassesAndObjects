class Ground{
constructor(x,y,width, height){
    var options={
        isStatic:true,
        'friction':1.0
    }
    this.body= Bodies.rectangle(x,y,width, height,options);
    this.width= width;
    this.height=height;
    World.add(world,this.body);


}
display()
{
   var place=this.body.position;
    rectMode(CENTER) ;
    fill("brown");
    rect(place.x,place.y,this.width,this.height);
}
};