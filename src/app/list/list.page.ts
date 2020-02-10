import { ModalPage } from './../modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor(private modalController: ModalController){}

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss();

    return await modal.present();
  }

  

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
