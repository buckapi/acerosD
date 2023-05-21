import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxUsefulSwiperModule,
    LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
