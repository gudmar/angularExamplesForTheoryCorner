import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scss1Component } from './scss1.component';

describe('Scss1Component', () => {
  let component: Scss1Component;
  let fixture: ComponentFixture<Scss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
