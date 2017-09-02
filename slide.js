// JavaScript Document

//window.onload = downloadingImage();


var allImageArray = ["image/11.png","image/12.png","image/13.png","image/14.png","image/15.png","image/16.png","image/17.png","image/18.png","image/19.png","image/20.png"];
var count = 0;

downloadingImage = function (){
	
	//var my_image = new Image();
    //my_image.src = "image/11.png";
	
	if(count>9){
		count = 0;
	 document.getElementById('imageSlider').src = allImageArray[count];	
		count++;
	}else
	
	if(count<10){
		
		   document.getElementById('imageSlider').src = allImageArray[count];
		   count++;
	}
	
	
	//document.getElementById('imageSlider').src = "image/11.png";
	
	
}
