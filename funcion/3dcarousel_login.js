var count = 0; 
var baseSpeed = 0.05; 
var radiusX = 190; 
var radiusY = 40; 
var centerX = 150; 
var centerY = 90;
var speed = 0.3;
var imageDivs = '';
var numberOfElements = 0;
var carousel = '';
var speedTest = '';
var radiusY = 40; 

window.addEvent('domready', function(){
  
	carousel = $('carousel');
	speedTest = $('speedTest');

	imageDivs = carousel.getElementsByTagName("div"); 
	numberOfElements = imageDivs.length; 

        setInterval('startCarousel()',40);
        //carousel.addEvent('mousemove', onMouseMove.bindWithEvent( carousel ));
	
});



function startCarousel(){
	if (count <410){
                for(i=0; i < numberOfElements; i++){

                        angle = i * ( Math.PI * 2 ) / numberOfElements;

                        imageDivsStyle = imageDivs[ i ].style;
                        imageDivsStyle.position='absolute';

                        posX = ( Math.sin( count * ( baseSpeed * speed ) + angle )* radiusX + centerX );
                        posY = ( Math.cos( count * ( baseSpeed * speed ) + angle )* radiusY + centerY );


                        imageDivsStyle.left = posX+"px";
                        imageDivsStyle.top = posY+"px"

                        imageDivWidth = (posY+100)/3;
                        imageDivZIndex = Math.round(imageDivWidth)+100;

                        imageDivsStyle.width = imageDivWidth+'px';
                        imageDivsStyle.zIndex = imageDivZIndex;

                        angle += speed;

                }

                count++
        }
}