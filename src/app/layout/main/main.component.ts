import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  ngOnInit() {}


// slides products
activeCarousel =1; // chỉ định carousel hiển thị
  slides1 = [
    {img: 'assets/images/xe/wave.png'},
    {img: 'assets/images/xe/lead.png'},
    {img: 'assets/images/xe/sh.png'},
    {img: 'assets/images/xe/vario.png'},
    {img: 'assets/images/xe/future.png'},
    {img: 'assets/images/xe/sh350i.png'},
    {img: 'assets/images/xe/air blade.png'}
 ];
 slides2 = [
  {img: 'assets/images/xedien/xedien1.png'},
  {img: 'assets/images/xedien/xedien2.png'},
  {img: 'assets/images/xedien/xedien3.png'},
  {img: 'assets/images/xedien/xedien4.jpg'},
  {img: 'assets/images/xedien/xedien5.png'},
  {img: 'assets/images/xedien/xedien6.png'},
  {img: 'assets/images/xedien/xedien7.png'},


 ]

slide1Config = { slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

};
slide2Config = { slidesToShow:4,
slidesToScroll:1,
autoplay: true,
autoplaySpeed: 3000,};

showCarousel(carouselNumber : number){
  this.activeCarousel = carouselNumber;
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
