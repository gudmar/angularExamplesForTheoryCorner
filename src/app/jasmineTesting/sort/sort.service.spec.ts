import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

const bubbleTests = [
  {input: [1, 2, 3, 4, 5], output: [1, 2, 3, 4, 5], name:'Testing bubble sort: 1'},
  {input: [5, 4, 3, 2, 1], output: [1, 2, 3, 4, 5], name:'Testing bubble sort: 2'},
  {input: [1, 3, 3, 4, 5], output: [1, 3, 3, 4, 5], name:'Testing bubble sort: 3'},
  {input: [5, 3, 3, 4, 5], output: [3, 3, 4, 5, 5], name:'Testing bubble sort: 4'},
]

describe('Sort spy', ()=>{
  let  service: SortService = new SortService();
  let spy1:any;
  beforeEach(function(this:any){
    this.spy1 =spyOn(service, 'functionToBeCalled');
    console.dir(this.spy1)
  })
  
  it('Should call functionToBeCalled', function(this:any){
    let spy2 = spyOn(service, 'secondFunctionToBeCalled')
    service.callFunctionTimes(5);
    expect(this.spy1).toHaveBeenCalled();
    expect(this.spy1).toHaveBeenCalledTimes(5);
    expect(this.spy1).toHaveBeenCalledBefore(spy2);
    expect(this.spy1).toHaveBeenCalledWith(2);
  })

  it('Should call functionToBeCalled', function(this:any){
    let spy2 = spyOn(service, 'secondFunctionToBeCalled')
    service.callFunctionTimes(5);
    expect(spy2).toHaveBeenCalled();
    expect(this.spy1).toHaveBeenCalledTimes(5);
    expect(this.spy1).toHaveBeenCalledBefore(spy2);
    expect(this.spy1).toHaveBeenCalledWith(2);
  })

  it('Should create a mock spy object', function(this:any){
    let objSpy = jasmine.createSpyObj('multiSpy', ['sp1', 'sp2', 'sp3'])
    objSpy.sp1();
    objSpy.sp2();
    expect(objSpy.sp1).toHaveBeenCalled();
    expect(objSpy.sp2).toHaveBeenCalled();
  })

  it('Should create a mock single spy', function(this:any){
    let spy = jasmine.createSpy('singleSpy')
    spy();
    expect(spy).toHaveBeenCalled();
  })


})

describe('SortService', () => {
  let  service: SortService = new SortService();
  const testedFunction = service.bubbleSort.bind(service);
  for (let testCase of bubbleTests){
    it(testCase.name, function(this:any){
      expect(testCase.output).toEqual(testedFunction(testCase.input))
    })

  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
