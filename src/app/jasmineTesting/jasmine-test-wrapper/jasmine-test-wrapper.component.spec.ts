import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineTestWrapperComponent } from './jasmine-test-wrapper.component';

describe('JasmineTestWrapperComponent', () => {
  let component: JasmineTestWrapperComponent;
  let fixture: ComponentFixture<JasmineTestWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasmineTestWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasmineTestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
