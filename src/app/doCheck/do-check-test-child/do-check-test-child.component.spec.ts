import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckTestChildComponent } from './do-check-test-child.component';

describe('DoCheckTestChildComponent', () => {
  let component: DoCheckTestChildComponent;
  let fixture: ComponentFixture<DoCheckTestChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCheckTestChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
