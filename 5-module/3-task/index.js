function initCarousel() {
  const offsetWidthElement = document.querySelector(".carousel__slide").offsetWidth;  
  const elementInner = document.querySelector(".carousel__inner");  
  const buttonRight = document.querySelector(".carousel__arrow_right");
  const buttonLeft = document.querySelector(".carousel__arrow_left");
  let counter = 0;
  showCarouselArrow (counter);  
  buttonRight.onclick = goRight;  
  buttonLeft.onclick = goLeft;  
  function goRight (){
    counter++;          
    elementInner.style.transform = 'translateX(-' + offsetWidthElement * counter + 'px)';    
    showCarouselArrow (counter);    
  }
  function goLeft (){
    counter--;    
    elementInner.style.transform = 'translateX(-' + offsetWidthElement * counter + 'px)';    
    showCarouselArrow (counter);    
  }
  function showCarouselArrow (counter){
    if(counter === 3){
      return buttonRight.style.display = "none";
    }
    else if(counter < 1){
      return buttonLeft.style.display = "none";
    }
    else{
      buttonRight.style.display = "";
      buttonLeft.style.display = "";
    }    
  }
}