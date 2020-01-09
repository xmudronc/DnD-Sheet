import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-modal-roll',
  templateUrl: './modal-roll.page.html',
  styleUrls: ['./modal-roll.page.scss'],
})
export class ModalRollPage implements OnInit {

  data: any;

  constructor (
    public modalController: ModalController,
    private statusBar: StatusBar
  ) { }

  ngOnInit() {
  }

  cancelBtn() {
    this.modalController.dismiss();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

}
