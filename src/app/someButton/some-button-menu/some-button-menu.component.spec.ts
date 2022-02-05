import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeButtonMenuComponent } from './some-button-menu.component';

describe('SomeButtonMenuComponent', () => {
  let component: SomeButtonMenuComponent;
  let fixture: ComponentFixture<SomeButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeButtonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
