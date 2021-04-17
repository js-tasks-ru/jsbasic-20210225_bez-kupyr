import createElement from '../../assets/lib/create-element.js';

let product = {
  name: "Laab kai chicken salad", // название товара
  price: 10, // цена товара
  category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
  image: "laab_kai_chicken_salad.png", // название картинки товара
  id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}


export default class ProductCard {
  constructor({product}) {
    
  }

  getTemplateCard(){
    return `<div class="card">
      <div class="card__top">
          <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
          <span class="card__price">€<!--значение product.price--></span>
      </div>
      <div class="card__body">
          <div class="card__title"><!--значение product.name--></div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
  </div>`
  }

  render(){
    product.forEach(type => console.log(type));
    
  }
}
