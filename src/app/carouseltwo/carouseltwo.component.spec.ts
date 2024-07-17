import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseltwoComponent } from './carouseltwo.component';

describe('CarouseltwoComponent', () => {
  let component: CarouseltwoComponent;
  let fixture: ComponentFixture<CarouseltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouseltwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouseltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
