import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  images = ['assets/images/banner.jpg', 'assets/images/banner1.jpg', 'assets/images/banner2.jpg', 'assets/images/banner3.jpg'];
  currentIndex = 0;

  // @ViewChild('slickModal') slickModal: SlickCarouselComponent; // Reference to the ngx-slick-carousel


  ngOnInit() {
    this.startBannerRotation();
  }

  startBannerRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000); // Chuyển hình cứ sau 2 giây
  }



  slides = [
    {img: 'assets/images/xe/wave.png'},
    {img: 'assets/images/xe/lead.png'},
    {img: 'assets/images/xe/sh.png'},
    {img: 'assets/images/xe/vario.png'},
    {img: 'assets/images/xe/future.png'},
 ];
slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
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
