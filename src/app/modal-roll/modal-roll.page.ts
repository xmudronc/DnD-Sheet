import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-roll',
  templateUrl: './modal-roll.page.html',
  styleUrls: ['./modal-roll.page.scss'],
})
export class ModalRollPage implements OnInit {

  data: any;

  constructor (
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  cancelBtn() {
    this.modalController.dismiss();
  }

}
