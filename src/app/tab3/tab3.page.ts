import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
