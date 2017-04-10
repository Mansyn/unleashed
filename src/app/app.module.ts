import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// routes
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DesignServicesComponent } from './components/design/services/services.component';
import { DevelopmentComponent } from './components/development/development.component';
import { DevelopmentServicesComponent } from './components/development/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailComponent } from './components/contact/email/email.component';
import { FacebookComponent } from './components/contact/facebook/facebook.component';

// pipes
import { TitleCase } from './pipes/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DesignComponent,
    DesignServicesComponent,
    DevelopmentComponent,
    DevelopmentServicesComponent,
    ContactComponent,
    EmailComponent,
    FacebookComponent,
    TitleCase
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'design', component: DesignComponent },
      { path: 'design/services', component: DesignServicesComponent },
      { path: 'development', component: DevelopmentComponent },
      { path: 'development/services', component: DevelopmentServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'contact/email', component: EmailComponent },
      { path: 'contact/facebook', component: FacebookComponent },
      { path: '*', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
