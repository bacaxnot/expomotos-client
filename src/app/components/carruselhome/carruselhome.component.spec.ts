import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselhomeComponent } from './carruselhome.component';

describe('CarruselhomeComponent', () => {
  let component: CarruselhomeComponent;
  let fixture: ComponentFixture<CarruselhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
