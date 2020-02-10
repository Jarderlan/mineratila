import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpesadosPage } from './mpesados.page';

const routes: Routes = [
  {
    path: '',
    component: MpesadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpesadosPageRoutingModule {}
