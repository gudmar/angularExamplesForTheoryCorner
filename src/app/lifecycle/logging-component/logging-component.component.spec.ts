import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingComponentComponent } from './logging-component.component';

describe('LoggingComponentComponent', () => {
  let component: LoggingComponentComponent;
  let fixture: ComponentFixture<LoggingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
