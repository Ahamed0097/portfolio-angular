import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AccordionModule} from 'ngx-bootstrap/accordion'
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
