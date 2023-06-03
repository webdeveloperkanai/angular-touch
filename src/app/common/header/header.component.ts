import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  myMenu;
  menuList = [
    {
      title: 'Home',
      uri: '/',
      hasChild: [],
    },
    {
      title: 'About us',
      uri: '/About-us',
      hasChild: [],
    },
    {
      title: 'Contact us',
      uri: '/Contact-us',
      hasChild: [],
    },
  ];
  constructor() {
    this.myMenu = this.menuList.map(
      (
        menu,
        ind
      ) => `<li class="nav-item active"><a class="nav-link" href="{{menu.title}}">Home <span
     class="sr-only">(current)</span></a></li>`
    );
  }
}
