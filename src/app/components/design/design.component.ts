import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
    selector: 'design',
    template: require('./design.component.html'),
    styleUrls: ['./design.component.scss']
})
export class DesignComponent {
    section: any;
    constructor(private app: AppComponent) {
        if (window.screen.width > 960) {
            app.sidenav.open();
        }

        this.section = app.navLinks.filter(x => x.section == 'design')[0];
    }
}