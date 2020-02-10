import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MpesadosPage } from './mpesados.page';

describe('MpesadosPage', () => {
  let component: MpesadosPage;
  let fixture: ComponentFixture<MpesadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpesadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MpesadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
