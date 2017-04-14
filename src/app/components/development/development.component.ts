import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
    selector: 'development',
    template: require('./development.component.html'),
    styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent {
    section: any;
    constructor(private app: AppComponent) {
        if (window.screen.width > 960) {
            app.sidenav.open();
        }

        this.section = app.navLinks.filter(x => x.section == 'development')[0];
    }
}