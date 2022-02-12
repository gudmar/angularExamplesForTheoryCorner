import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadChangeContentComponent } from './load-change-content.component';

describe('LoadChangeContentComponent', () => {
  let component: LoadChangeContentComponent;
  let fixture: ComponentFixture<LoadChangeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadChangeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadChangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
