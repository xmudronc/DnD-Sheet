import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRollPage } from './modal-roll.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRollPageRoutingModule {}
