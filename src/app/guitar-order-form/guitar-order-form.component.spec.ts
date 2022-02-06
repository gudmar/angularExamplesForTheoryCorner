import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarOrderFormComponent } from './guitar-order-form.component';

describe('GuitarOrderFormComponent', () => {
  let component: GuitarOrderFormComponent;
  let fixture: ComponentFixture<GuitarOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
