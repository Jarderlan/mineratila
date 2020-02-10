import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpesadosPageRoutingModule } from './mpesados-routing.module';

import { MpesadosPage } from './mpesados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpesadosPageRoutingModule
  ],
  declarations: [MpesadosPage]
})
export class MpesadosPageModule {}
