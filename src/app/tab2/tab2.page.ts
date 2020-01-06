import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor (
    public character: CharacterService
  ) {

  }

  getCharacter() {
    return this.character.character;
  }

  save() {
    this.character.save();
  }
}
