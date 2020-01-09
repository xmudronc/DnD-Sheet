import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor (
    public character: CharacterService,
    public modal: ModalService
  ) {

  }

  roll(num) {
    this.modal.openModal({
      type: 'D' + (num!=100?num:'%'),
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
