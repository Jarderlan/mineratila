import { ModalPage } from './../modal/modal.page';

import { Component, OnInit } from '@angular/core';

import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  
  constructor(
    private modalController: ModalController,
  ) { }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss();

    return await modal.present();
  }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
//https://www.mag.com.br/blog/educacao-financeira/artigo/investir-em-ouro