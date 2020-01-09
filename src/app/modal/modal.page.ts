import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { CharacterService } from '../character.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  data: any;
  attribute: any;

  constructor (    
    public modal: ModalService,
    public modalController: ModalController,
    public character: CharacterService,
    private statusBar: StatusBar
  ) { }

  ngOnInit() {
    this.attribute = this.character.getAttribute(this.data);
  }

  onChange(val) {
    this.attribute.value = val;
  }

  inc() {
    this.attribute.value++;
  }

  dec() {
    this.attribute.value--;
  }

  okBtn() {
    this.character.edit(this.data, this.attribute.value);
    this.cancelBtn();
  }

  cancelBtn() {
    this.modalController.dismiss();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

}
