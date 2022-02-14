import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDependenciesComponentComponent } from './no-dependencies-component.component';


describe('Setting test with new operator', ()=>{
  let component = new NoDependenciesComponentComponent();
  it('should be filled with data onInit',()=>{
    expect(component.content).toBe('');
    component.ngOnInit();
    console.info('COMPONENT', component)
    expect(component.content.length).toBeGreaterThan(4);
  })
})


describe('Test with the fixture', () => {
  let component: NoDependenciesComponentComponent;
  let fixture: ComponentFixture<NoDependenciesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDependenciesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDependenciesComponentComponent);
    component = fixture.componentInstance;
  });

  it('should fill the content property after ngOnInit', () => {
    let domElement = fixture.debugElement.nativeElement.querySelector('div');
    expect(component.content).toBe('');
    component.ngOnInit();
    expect(component.content.length).toBeGreaterThan(5);
    expect(domElement.innerHTML).toBe('');
    fixture.detectChanges();
    expect(domElement.innerHTML).not.toBe('');
  });
});



describe('NoDependenciesComponentComponent', () => {
  let component: NoDependenciesComponentComponent;
  let fixture: ComponentFixture<NoDependenciesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDependenciesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDependenciesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
