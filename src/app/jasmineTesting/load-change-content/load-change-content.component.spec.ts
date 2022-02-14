import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoadChangeContentComponent } from './load-change-content.component';
import {RandomDataProviderService} from '../random-data-provider.service'



class MockRandomDataService {
  nrOfRuns: number = 0;
  getData(nr:number){
    let output = '';
    nr = 5 + this.nrOfRuns;
    for (let i = 0; i < nr; i++){
      output += i.toString(32);
    }
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(output)
        resolve(output);
      },5)
    })
  }

  increaseCounter(){
    this.nrOfRuns++;
  }
}

describe('LoadChangeContentComponent', () => {
  let component: LoadChangeContentComponent;
  let fixture: ComponentFixture<LoadChangeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadChangeContentComponent ],
      providers: [{provide: RandomDataProviderService, useClass: MockRandomDataService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadChangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should component be empty before onInit', ()=>{
     let p = fixture.nativeElement.querySelector('p');
     let h = fixture.debugElement.nativeElement.querySelector('h5');
     expect(p.innerText).toBe('');
     expect(h.innerText).toBe('');
  })

  it('should have content after onInit and promise resolve', fakeAsync(()=>{
    let p = fixture.nativeElement.querySelector('p');
    let h = fixture.debugElement.nativeElement.querySelector('h5');
    component.ngOnInit();
    tick(80);
    fixture.detectChanges();
    console.log(p)
    expect(p.innerText).toBe('01234');
    expect(h.innerText).toBe('01234');
 }))

 it('should fill headline with data after ngOnInit', fakeAsync(()=>{
   expect(component.headline).toBe('');
   component.ngOnInit();
   tick(80);
   expect(component.headline).toBe('01234');
 }))

 it('should update value after click', fakeAsync(()=>{
  let p = fixture.nativeElement.querySelector('p');
  let h = fixture.debugElement.nativeElement.querySelector('h5');
  let b = fixture.nativeElement.querySelector('button');
  let serv = TestBed.get(RandomDataProviderService);
  component.ngOnInit();
  tick(80);
  fixture.detectChanges();
  expect(p.innerText).toBe('01234');
  expect(h.innerText).toBe('01234');
  serv.increaseCounter();
  b.click();
  tick(80);
  fixture.detectChanges();
  expect(p.innerText).toBe('012345');
  expect(h.innerText).toBe('012345');
  
}))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
