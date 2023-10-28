import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { MatIconModule } from '@angular/material/icon'; // Điều chỉnh đường dẫn cho @angular/material/icon
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannerComponent } from './layout/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule, // Thêm MatIconModule vào mảng imports
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
