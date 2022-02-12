import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineTestComponent } from './jasmine-test.component';
import { ExtractColorsService } from '../extract-colors.service';

class MockExtractColorsService {
  getFiltered(colorFlag:number, color:string){
    return '#000000'
  }
}


xdescribe('JasmineTestComponent', () => {
  let component: JasmineTestComponent;
  let fixture: ComponentFixture<JasmineTestComponent>;
  let service: ExtractColorsService;


    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasmineTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ JasmineTestComponent ],
      providers: [
        {provide: ExtractColorsService, useClass: MockExtractColorsService}
      ]
    });
  });
  fixture = TestBed.createComponent(JasmineTestComponent);
  component = fixture.componentInstance; 
  service = TestBed.get(ExtractColorsService);
  // component = TestBed.inject(JasmineTestComponent);
  // service = TestBed.inject(ExtractColorsService);

  



  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});


// describe('JasmineTestComponent', () => {
//   let component: JasmineTestComponent;
//   let fixture: ComponentFixture<JasmineTestComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ JasmineTestComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(JasmineTestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
