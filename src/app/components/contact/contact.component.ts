import { Component } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
    selector: 'contact',
    template: require('./contact.component.html')
})
export class ContactComponent {
    section: any;
    constructor(private app: AppComponent) {
        if (window.screen.width > 960) {
            app.sidenav.open();
        }

        this.section = app.navLinks.filter(x => x.section == 'contact')[0];
    }
}