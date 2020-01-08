import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRollPageRoutingModule } from './modal-roll-routing.module';

import { ModalRollPage } from './modal-roll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRollPageRoutingModule
  ],
  declarations: [ModalRollPage]
})
export class ModalRollPageModule {}
