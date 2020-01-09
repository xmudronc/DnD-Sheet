import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CharacterService } from '../character.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

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
