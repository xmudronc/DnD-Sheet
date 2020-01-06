import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  page: any = ModalPage;
  modal: any;

  constructor (
    public event: Events,
    public modalController: ModalController
  ) { }

  async openModal(atr) {
    this.modal = await this.modalController.create({
      component: this.page,
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
