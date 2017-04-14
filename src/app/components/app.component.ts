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
  innerWidth: any;
  constructor(private router: Router) {
    this.innerWidth = (window.screen.width) + "px";
  };

  navLinks = [{
    'section': 'design',
    'pages': [{
      'link': 'services',
      'headline': 'Our design services',
      'summary': 'Find out more about what Unleashed Design can do for you. Let our experts help grow your brand.'
    }]
  }, {
    'section': 'development',
    'pages': [{
      'link': 'services',
      'headline': 'Our development services',
      'summary': 'Unleashed Development can bring you modern solutions for any technical requirements your business has.'
    }, {
      'link': 'portfolio',
      'headline': 'Our development portfolio',
      'summary': 'See some of our past work for reference and possibly inspiration.'
    }]
  }, {
    'section': 'contact',
    'pages': [{
      'link': 'email',
      'headline': 'Contact By Phone',
      'summary': 'Reach out to us online'
    }, {
      'link': 'facebook',
      'headline': 'On Facebook',
      'summary': 'Find us on Facebook and keep up with our latest work'
    }]
  }];

  @ViewChild('sidenav') sidenav: MdSidenav;

  public isHidden() {
    let list = ['/', '/home'],
      route = this.router.url;

    return (list.indexOf(route) > -1);
  }

  public currentPath() {
    var fullPath = this.router.url;
    var pathTxt = fullPath.replace('/', '');

    return pathTxt.split('/');
  }

  onResize(event) {
    if ((this.router.url === '/home') || (event.target.innerWidth < 600)) {
      this.sidenav.close();
    }
  }
}
