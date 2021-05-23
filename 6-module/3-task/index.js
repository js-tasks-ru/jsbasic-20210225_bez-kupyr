import createElement from '../../assets/lib/create-element.js';



export default class Carousel {
  constructor(slides) {
    this.counter = 0;
    this.slides = slides;
    this.elem = this.render();
  }

  getTemplateButton (){
    return `<div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`
  }

  getTemplateSlide (name,price,image,id){
    return `<div class="carousel__slide" data-id="${id}">
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${price.toFixed(2)}</span>
        <div class="carousel__title">${name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
  }

  goRight ({elementInner,elem,buttonRight,buttonLeft}){
    this.counter++;    
    const offsetWidthElement = elem.querySelector(".carousel__slide").offsetWidth;    
    elementInner.style.transform = 'translateX(-' + offsetWidthElement * this.counter + 'px)';    
    this.showCarouselArrow ({buttonRight,buttonLeft});    
  }

  goLeft ({elementInner,elem,buttonRight,buttonLeft}){    
    this.counter--;
    const offsetWidthElement = elem.querySelector(".carousel__slide").offsetWidth;       
    elementInner.style.transform = 'translateX(-' + offsetWidthElement * this.counter + 'px)';    
    this.showCarouselArrow ({buttonRight,buttonLeft});    
  }

  showCarouselArrow ({buttonRight,buttonLeft}){
    if(this.counter === this.slides.length-1){
      return buttonRight.style.display = "none";
    }
    else if(this.counter < 1){
      return buttonLeft.style.display = "none";
    }
    else{
      buttonRight.style.display = "";
      buttonLeft.style.display = "";
    }    
  }
  
  _createEventproductAdd = (buttonPlus,idSuperParent) =>{    
    const event = new CustomEvent('product-add', {detail: idSuperParent,bubbles:true});       
    buttonPlus.dispatchEvent(event);
    
  }

  render (){
  const elem = document.createElement("div");  
  elem.classList.add("carousel");
  const elementInner = document.createElement("div")
  elementInner.classList.add("carousel__inner");   
  let counter = 0;           
  for(const slide of this.slides){      
    const{name,price,image,id} = slide;      
    elementInner.insertAdjacentHTML('beforeend',this.getTemplateSlide (name,price,image,id));      
  }
  elem.append(elementInner);
  elem.insertAdjacentHTML('afterBegin',this.getTemplateButton ());

  const arrayButtonsPlus = elem.querySelectorAll('.carousel__button');
  for(let buttonPlus of arrayButtonsPlus){
    let slideId = buttonPlus.closest('.carousel__slide');
    //const{parentNode} = buttonPlus;
    //const{parentNode : superParent} = parentNode;
    const idSuperParent = slideId.dataset.id;
    //const idSuperParent = superParent.dataset.id
    buttonPlus.onclick = () => this._createEventproductAdd(buttonPlus,idSuperParent);  
    buttonPlus.addEventListener('product-add', event => {
      console.log(event.detail);            
    }); 
  }     
  const buttonRight = elem.querySelector(".carousel__arrow_right");
  const buttonLeft = elem.querySelector(".carousel__arrow_left");  
  this.showCarouselArrow ({counter,buttonRight,buttonLeft});
  buttonRight.onclick = () => this.goRight({counter,elementInner,elem,buttonRight,buttonLeft});  
  buttonLeft.onclick = () =>this.goLeft({counter,elementInner,elem,buttonRight,buttonLeft}); 
  return elem;       
  }  
}
