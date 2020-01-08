import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { AppComponent } from '../app.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor (
    public character: CharacterService,    
    public modal: ModalService
  ) {

  }

  calcStatBonus(stat) {
    var mod = this.character.getStatModifier(stat);
    if (mod < 0) {
      return '-' + mod;
    } else {
      return '+' + mod;
    }
  }

  calcStatBonusProf(stat, prof) {
    var mod = this.character.getStatModifier(stat);
    if (prof) {
      mod += this.character.character.proficiency_bonus;
    }
    if (mod < 0) {
      return '-' + mod;
    } else {
      return '+' + mod;
    }
  }

  edit(atr) {
    this.modal.openModal(atr, this.modal.EDIT);
  }

  getStat(stat) {
    return this.character.getStat(stat);
  }

  getCharacter() {
    return this.character.character;
  }

  save() {
    this.character.save();
  }
}
