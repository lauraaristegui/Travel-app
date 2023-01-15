import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhHotelComponent } from './search-hotel.component';

describe('SearhHotelComponent', () => {
  let component: SearhHotelComponent;
  let fixture: ComponentFixture<SearhHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearhHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
