import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { ModalService } from '../modal.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public character: CharacterService,
    public modal: ModalService,
    private imagePicker: ImagePicker
  ) {

  }

  ngOnInit() {
    try {
      if (this.character.character.image != undefined) {
        $('#character-img').css('background-image', 'url("data:image/png;base64,' + this.character.character.image + '")');
        $('#character-btn').hide();
      }
    } catch (error) {
      console.error(error);
    }
  }

  pickImg() {
    try {
      this.imagePicker.getPictures({
        maximumImagesCount: 1,
        outputType: 1
      }).then(results => {
        $('#character-img').css('background-image', 'url("data:image/png;base64,' + results + '")');
        $('#character-btn').hide();
        this.character.character.image = results;
      }, err => {
        console.error(err);
      });
    } catch (error) {
      console.error(error);
    }
  }

  roll(num) {
    this.modal.openModal({
      type: 'D' + (num != 100 ? num : '%'),
      result: Math.floor(Math.random() * num) + 1
    }, this.modal.ROLL);
  }

  getCharacter() {
    return this.character.character;
  }

  save() {
    this.character.save();
  }

  edit(atr) {
    this.modal.openModal(atr, this.modal.EDIT);
  }
}
