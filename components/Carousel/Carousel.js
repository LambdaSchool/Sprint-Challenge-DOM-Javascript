class Carousel {
  constructor(element) {
    this.element = element;

    this.items = element.querySelectorAll('Carousel__item');
  }

}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));