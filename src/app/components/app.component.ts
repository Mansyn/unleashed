import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private router: Router) { };

  navLinks = [{
    'section': 'design',
    'pages': [{
      'link': 'services'
    }]
  }, {
    'section': 'development',
    'pages': [{
      'link': 'services'
    }]
  }, {
    'section': 'contact',
    'pages': [{
      'link': 'email'
    }, {
      'link': 'facebook'
    }]
  }];

  @ViewChild('sidenav') sidenav: MdSidenav;

  public isHidden() {
    let list = ['/', '/home'],
      route = this.router.url;

    return (list.indexOf(route) === -1);
  }

  public currentPath() {
    var fullPath = this.router.url;
    var pathTxt = fullPath.replace('/', '');

    return pathTxt.split('/');
  }

  onResize(event) {
    if (this.router.url === '/home') {
      this.sidenav.close();
    }
    else if (event.target.innerWidth < 600) {
      if (this.sidenav._isOpened) {
        this.sidenav.close();
      }
    }
    else {
      if (this.sidenav._isClosed) {
        this.sidenav.open();
      }
    }
  }
}
