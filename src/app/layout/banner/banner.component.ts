import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  slides = [
    {img: 'assets/images/banner.jpg'},
    {img: 'assets/images/banner1.jpg'},
    {img: 'assets/images/banner2.jpg'},
    {img: 'assets/images/banner3.jpg'},


 ];
slideConfig = { slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,


};
addSlide() {
  this.slides.push({ img: 'http://placehold.it/350x150/777777' });
}
removeSlide() {
  this.slides.length = this.slides.length - 1;
}
slickInit(e: any) {
  console.log('slick initialized');
}
breakpoint(e: any) {
  console.log('breakpoint');
}
afterChange(e: any) {
  console.log('afterChange');
}
beforeChange(e: any) {
  console.log('beforeChange');
}
constructor() {}
}
