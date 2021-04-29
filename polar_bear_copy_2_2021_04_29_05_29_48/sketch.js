var textBox;
var para;
let newValue
let myFont
function preload (){
  myFont=loadFont('assets/codenext.otf');
  polar=loadImage('assets/polar 1.png');
  polar1=loadImage('assets/polar 222.png');
  
  polar2=loadImage('assets/polar 3.png');
  polar3=loadImage('assets/polar 4.png');
  polar4=loadImage('assets/polar 5.png');
   polar5=loadImage('assets/polar 6.png');
   polar6=loadImage('assets/polar 7.png');
   polar7=loadImage('assets/polar 8.png');
  
  polar8=loadImage('assets/polar 9.png');
  polar9=loadImage('assets/polar 10.png');
  polar10=loadImage('assets/polar 11.png');
   polar11=loadImage('assets/polar 12.png');
   polar12=loadImage('assets/polar 13.png');
   polar13=loadImage('assets/polar 14.png');
  
  polar14=loadImage('assets/polar 15.png');
  polar15=loadImage('assets/polar 16.png');
  polar16=loadImage('assets/polar 17.png');
   polar17=loadImage('assets/polar 18.png');
   polar18=loadImage('assets/polar 19.png');
  
  
  polar19=loadImage('assets/polar 20.png');
  polar20=loadImage('assets/polar 21.png');
  polar21=loadImage('assets/polar 22.png');
   polar22=loadImage('assets/polar 23.png');
   polar23=loadImage('assets/polar 24.png');
   polar24=loadImage('assets/polar 25.png');
  
  
  
}


function setup(){
	createCanvas(1920,1080);
   
  background(200,200,200);
  image(polar,0,0);

	textBox = createInput('');
	para = createP('');
  
  textBox.position(300,625);
  para.position(100000,10000);

	//when text is typed call the changedText function
	textBox.input(changedText);
   
 

}

function changedText() {
	//is the text a number? if so multiply by two.
	if(textBox.value() >= 0){
     
		newValue =  textBox.value();
		newValue = newValue*114155251;
		para.html(newValue);
      
      
	}
	 if(textBox.value() ==0){
      image(polar,0,0);
   
    
    }
   if(textBox.value() ==1){
      image(polar1,0,0);
    fill(0,0,255);
    noStroke();
    rect(0,1000,1920,1080);
 
    
  }
     if(textBox.value() ==2){
       image(polar2,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,975,1920,1080);
 
  }
     if(textBox.value() ==3){
       image(polar3,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,950,1920,1080);
  
  }
    if(textBox.value() ==4){
      image(polar4,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,925,1920,1080);
  
  }
    if(textBox.value() ==5){
      image(polar5,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,900,1920,1080);
  
  }
    if(textBox.value() ==6){
      image(polar6,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,875,1920,1080);
  
  }
    if(textBox.value() ==7){
      image(polar7,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,850,1920,1080);
  
  }
    if(textBox.value() ==8){
      image(polar8,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,825,1920,1080);
  
  }
    if(textBox.value() ==9){
      image(polar9,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,800,1920,1080);
  
  }
    
  if(textBox.value() ==10){
    image(polar10,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,775,1920,1080);
  
  }
    if(textBox.value() ==11){
      image(polar11,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,750,1920,1080);
  
  }
    if(textBox.value() ==12){
      image(polar12,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,725,1920,1080);
    }
  if(textBox.value() ==13){
    image(polar13,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,700,1920,1080);
  
  }
      if(textBox.value() ==14){
        image(polar14,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,675,1920,1080);
  
  }
      
       if(textBox.value() ==15){
         image(polar15,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,625,1920,1080);
  
  }
       if(textBox.value() ==16){
     image(polar16,0,0);
         fill(0,0,255);
    noStroke();
    rect(0,600,1920,1080);
  
  }
       if(textBox.value() ==17){
      image(polar17,0,0);
         fill(0,0,255);
    noStroke();
    rect(0,575,1920,1080);
  
  }
       if(textBox.value() ==18){
     image(polar18,0,0);
         fill(0,0,255);
    noStroke();
    rect(0,550,1920,1080);
  
  }
       if(textBox.value() ==19){
      image(polar19,0,0);
         
         fill(0,0,255);
    noStroke();
    rect(0,525,1920,1080);
  
  }
      
       if(textBox.value() ==20){
         image(polar20,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,500,1920,1080);
  
  }
      
       if(textBox.value() ==21){
         image(polar21,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,475,1920,1080);
  
  }
       if(textBox.value() ==22){
         image(polar22,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,450,1920,1080);
  
  }
      
       if(textBox.value() ==23){
         image(polar23,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,425,1920,1080);
  
  }
       if(textBox.value() ==24){
         image(polar24,0,0);
      fill(0,0,255);
    noStroke();
    rect(0,400,1920,1080);
  
  }
  fill(255,0,0);
   textFont(myFont, 100,100);
      text(newValue,200,250);
}

 

function draw(){
 


}