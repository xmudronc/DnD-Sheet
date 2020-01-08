import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { ModalRollPage } from './modal-roll/modal-roll.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  EDIT: any = ModalPage;
  ROLL: any = ModalRollPage;
  modal: any;

  constructor (
    public event: Events,
    public modalController: ModalController
  ) { }

  async openModal(atr, page) {
    this.modal = await this.modalController.create({
      component: page,
      cssClass: 'modal',
      componentProps: { 
        data: atr
      }
    });
    return await this.modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
