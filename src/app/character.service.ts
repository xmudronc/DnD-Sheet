import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  database: SQLiteObject;
  db_status: any = undefined;

  character: any = {
    name: 'Opičiak',
    level: 3,
    race: 'Halfling (lightfoot)',
    class: 'Monk',
    background: 'Hermit',
    alignment: 'Neutral',
    experience: 0,
    inspiration: undefined,
    proficiency_bonus: 2,
    perception: 11,
    stats: {
      strength: 6,
      dexterity: 17,
      constitution: 13,
      inteligence: 11,
      wisdom: 13,
      charisma: 14
    },
    saving_throws: {
      strength: true,
      dexterity: true,
      constitution: false,
      inteligence: false,
      wisdom: false,
      charisma: false
    },
    skills: [
      {
        name: 'Acrobatics',
        radio: true,
        base: 'dex'
      },
      {
        name: 'Animal_handling',
        radio: false,
        base: 'wis'
      },
      {
        name: 'Arcana',
        radio: false,
        base: 'int'
      },
      {
        name: 'Athletics',
        radio: false,
        base: 'str'
      },
      {
        name: 'Deception',
        radio: false,
        base: 'cha'
      },
      {
        name: 'History',
        radio: false,
        base: 'int'
      },
      {
        name: 'Insight',
        radio: true,
        base: 'wis'
      },
      {
        name: 'Intimidation',
        radio: false,
        base: 'cha'
      },
      {
        name: 'Investigation',
        radio: false,
        base: 'int'
      },
      {
        name: 'Medicine',
        radio: true,
        base: 'wis'
      },
      {
        name: 'Nature',
        radio: false,
        base: 'int'
      },
      {
        name: 'Perception',
        radio: false,
        base: 'wis'
      },
      {
        name: 'Performance',
        radio: true,
        base: 'cha'
      },
      {
        name: 'Persuasion',
        radio: false,
        base: 'cha'
      },
      {
        name: 'Religion',
        radio: true,
        base: 'int'
      },
      {
        name: 'Sleight_of_hand',
        radio: false,
        base: 'dex'
      },
      {
        name: 'Stealth',
        radio: false,
        base: 'dex'
      },
      {
        name: 'Survival',
        radio: false,
        base: 'wis'
      }
    ],
    defense: {
      armor_class: 14,
      speed: 35,
      initiative: 3,
      max_hp: 19,
      curr_hp: undefined,
      tmp_hp: undefined,
      hit_dice: {
        total: 3,
        type: 'd8'
      }
    },
    attack: [
      {
        name: 'Quarterstaff',
        bonus: 5,
        damage: '1d6/1d8'
      },
      {
        name: 'Dart',
        bonus: 5,
        damage: '1d4'
      }
    ],
    personality: {
      traits: 'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
      ideals: 'Self-Knowledge. If you know yourself, there\’s nothing left to know.',
      bonds: 'Should my discovery come to light, it could bring ruin to the world.',
      flaws: 'Being sober makes me insane.'
    },
    features: [
      'unarmored defense',
      'martial arts',
      'unarmored movement',
      'ki (3)',
      'deflect missiles',
      'monastic tradition (way of the drunken master)',
      'drunken technique',
      'discovery'
    ],
    language: [
      'obecný',
      'hobití',
      'mačací'
    ],
    equipment: [
      'backpack',
      'crowbar',
      'hammer',
      'pitons (10)',
      'torches (10)',
      'tinderbox',
      'days of rations (10)',
      'waterskin',
      'hempen rope (50 ft)',
      'a scroll case stuffed full of notes from your studies or prayers',
      'winter blanket',
      'set of common clothes',
      'herbalism kit'
    ],
    other_proficiency: [
      'brewer supplies'
    ]
  };

  constructor(
    private sqlite: SQLite
  ) {
    this.initializeDatabase();
  }

  initializeDatabase() {
    try {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.database.executeSql('create table character(name TEXT, data TEXT);', []).then(() => {
          console.log('Executed SQL, database init.');
          this.db_status = 'OK';
        }).catch(e => {
          console.error(e);
          if (e.code == 5) {
            this.db_status = 'OK';
            this.load();
          } else {
            this.db_status = 'ERR';
          }
        });
      }).catch(e => {
        console.error(e);
        this.db_status = 'ERR';
      });
    } catch (error) {
      console.error(error);
      this.db_status = 'ERR';
    }
  }

  getCharacter() {
    return this.character;
  }

  save() {
    console.log('Character save.');
    try {
      this.database.executeSql('insert into character(name, data) values(?,?);', [this.character.name, JSON.stringify(this.character)]).then(() => {
        console.log('Executed SQL, database insert.');
      }).catch(e => {
        console.error(e);
      });
    } catch (error) {
      console.error(error);
    }
  }

  load() {
    console.log('Character load.');
    try {
      this.database.executeSql('select max(rowid) as id, name, data from character;', []).then(data => {
        console.log('Executed SQL, database select.');
        var new_char = JSON.parse(data.rows.item(0).data);
        if (new_char != null) {
          this.character = new_char;
        }
      }).catch(e => {
        console.error(e);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getAttribute(atr) {
    switch (atr) {
      case 'exp':
        return {
          name: 'Experience',
          value: this.character.experience
        };
      case 'lvl':
        return {
          name: 'Level',
          value: this.character.level
        };
    }
  }

  edit(atr, val) {
    switch (atr) {
      case 'exp':
        this.character.experience = val;
        break;
      case 'lvl':
        this.character.level = val;
        break;
    }
  }

  getStat(short) {
    switch (short) {
      case 'str':
        return this.character.stats.strength;
      case 'dex':
        return this.character.stats.dexterity;
      case 'con':
        return this.character.stats.constitution;
      case 'int':
        return this.character.stats.inteligence;
      case 'wis':
        return this.character.stats.wisdom;
      case 'cha':
        return this.character.stats.charisma;
    }
  }

  getStatModifier(stat) {
    if (stat >= 2 && stat <= 3) {
      return -4;
    } else if (stat >= 4 && stat <= 5) {
      return -3;
    } else if (stat >= 6 && stat <= 7) {
      return -2;
    } else if (stat >= 8 && stat <= 9) {
      return -1;
    } else if (stat >= 10 && stat <= 11) {
      return 0;
    } else if (stat >= 12 && stat <= 13) {
      return 1;
    } else if (stat >= 14 && stat <= 15) {
      return 2;
    } else if (stat >= 16 && stat <= 17) {
      return 3;
    } else if (stat >= 18 && stat <= 19) {
      return 4;
    } else if (stat >= 20 && stat <= 21) {
      return 5;
    } else if (stat >= 22 && stat <= 23) {
      return 6;
    } else if (stat >= 24 && stat <= 25) {
      return 7;
    } else if (stat >= 26 && stat <= 27) {
      return 8;
    } else if (stat >= 28 && stat <= 29) {
      return 9;
    } else if (stat >= 30) {
      return 10;
    } else {
      return -5;
    }
  }
}
