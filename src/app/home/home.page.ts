import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  slideOpts={
    loop:true,
    speed: 700
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
