import { ModalPage } from './../modal/modal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mpesados',
  templateUrl: './mpesados.page.html',
  styleUrls: ['./mpesados.page.scss'],
})
export class MpesadosPage {

  dataReturned: any;

  constructor(
    public modalController: ModalController,
    public alertController: AlertController
  ) { }

    async presentAlert(){
      const alert = await this.alertController.create({
        message: 'Passe para o lado para ver mais itens.',
        buttons: [{
          text: 'OK',
          cssClass: 'success'
        }]
      });

      await alert.present();
    }

  ngOnInit() {
    this.presentAlert();
  }

  slideOpts={
    loop:true
  };

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "ParamID": 123,
        "ParamTitle": "Formulário"
      }
    });

    modal.onDidDismiss().then((dataReturned)=>{
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }
}
