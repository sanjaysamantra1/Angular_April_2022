import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Demo1Component } from './demo1/demo1.component';

@NgModule({
  // components, pipes, directives
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    Demo1Component,
  ],
  // modules
  imports: [BrowserModule],
  // export something to other module
  exports: [],
  // services
  providers: [],
  // load - which component to load
  bootstrap: [AppComponent],
})
export class AppModule {}
