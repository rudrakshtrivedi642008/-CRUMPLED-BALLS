class paper
{
	constructor(x,y,r)
	{
		var options={
         isStatic: false,
		 restitution:0.3,
		 friction:0,
         density:1.2
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.Body=Bodies.circle(this.x, this.y,(this.r-20) /2, options)
		
		World.add(world, this.Body)
	}
	display()
	{
		var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill(255)
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r);
			//rect(0,0,this.wallThickness, this.paperHeight);
			pop()			
	}

}