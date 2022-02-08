import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckTestComponent } from './do-check-test.component';

describe('DoCheckTestComponent', () => {
  let component: DoCheckTestComponent;
  let fixture: ComponentFixture<DoCheckTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCheckTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
