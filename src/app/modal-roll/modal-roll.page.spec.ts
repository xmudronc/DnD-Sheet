import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRollPage } from './modal-roll.page';

describe('ModalRollPage', () => {
  let component: ModalRollPage;
  let fixture: ComponentFixture<ModalRollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
