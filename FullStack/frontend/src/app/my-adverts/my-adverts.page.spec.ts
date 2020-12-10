import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAdvertsPage } from './my-adverts.page';

describe('MyAdvertsPage', () => {
  let component: MyAdvertsPage;
  let fixture: ComponentFixture<MyAdvertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdvertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAdvertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
