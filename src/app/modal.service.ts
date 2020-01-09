import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { ModalRollPage } from './modal-roll/modal-roll.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  EDIT: any = ModalPage;
  ROLL: any = ModalRollPage;
  modal: any;

  constructor (
    public event: Events,
    public modalController: ModalController,
    private statusBar: StatusBar
  ) { }

  async openModal(atr, page) {
    this.modal = await this.modalController.create({
      component: page,
      cssClass: 'modal',
      componentProps: { 
        data: atr
      }
    });
    this.statusBar.backgroundColorByHexString('#adadad');
    return await this.modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }
}
