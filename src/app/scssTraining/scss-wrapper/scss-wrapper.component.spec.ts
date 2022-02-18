import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssWrapperComponent } from './scss-wrapper.component';

describe('ScssWrapperComponent', () => {
  let component: ScssWrapperComponent;
  let fixture: ComponentFixture<ScssWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
