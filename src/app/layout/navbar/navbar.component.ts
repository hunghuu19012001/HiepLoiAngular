import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'angular-hieploi';
  //sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }


}
