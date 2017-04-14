import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')]
})
export class HomeComponent {
    constructor(private app: AppComponent) {
        app.sidenav.close();
    };
}