import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertsPage } from './adverts.page';

describe('AdvertsPage', () => {
  let component: AdvertsPage;
  let fixture: ComponentFixture<AdvertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
