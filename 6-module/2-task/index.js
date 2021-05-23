import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }

  getTemplateCard(){    
    const{name,price,image} = this.product;     
    return `<div class="card__top" id="4">
          <img src="/assets/images/products/${image}" class="card__image" alt="product">
          <span class="card__price" id="1">€${price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${name}</div>
          <button type="button" class="card__button" id="2">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon" id="3">
          </button>
      </div>`
  }
  _createEventproductAdd = button =>{
    const{id} = this.product;
    const event = new CustomEvent('product-add', {detail: id,bubbles:true});       
    button.dispatchEvent(event);
    
  }
  

  render(){
    const elem = document.createElement("div");
    elem.classList.add("card");
    elem.innerHTML = this.getTemplateCard();
    let button = elem.querySelector('.card__button');
    button.onclick = () => this._createEventproductAdd(button);  
    elem.addEventListener('product-add', e => console.log(e.detail));
    return elem;       
  }
}