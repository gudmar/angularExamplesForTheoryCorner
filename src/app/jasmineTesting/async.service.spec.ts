import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;
  service = new AsyncService();
  let testedFunction = service.getData.bind(service);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('should return proper data',async ()=>{
    let dataTemplate:any = {a: 1, b: 2}
    let dataFromService = await service.getData();
    expect(dataTemplate).toEqual(dataFromService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

// https://codecraft.tv/courses/angular/unit-testing/asynchronous/

// https://scriptverse.academy/tutorials/jasmine-spyon.html

describe('Using a timeout in beforeEach and done argument',()=>{
  let lock = true;
  beforeEach((done1)=>{
    setTimeout(()=>{
      lock = false; 
      done1();
    }, 1000);
    
  })
  it('Should pass when unlocked', function(done){
    expect(lock).toBeFalse();
    done();
  })
})

describe('Using a clock and tick', ()=>{
  let service: AsyncService;
  service = new AsyncService();
  let testedFunction = service.getData.bind(service);

  beforeEach(function(){
    jasmine.clock().install();
    service = new AsyncService();
  })
  afterEach(function(){
    jasmine.clock().uninstall();
  })
  it('Should pass after timer expired', ()=>{
    let s = new AsyncService();
    let spy: any = spyOn<any, any>(s, "dummy" );//.and.callThrough()
    s.getData();
    expect(spy).not.toHaveBeenCalled();
    jasmine.clock().tick(101);
    expect(spy).toHaveBeenCalled();
  })
})

describe('callThrough', ()=>{
  let s:AsyncService;
  let spyA:any;
  let spyB:any;
  beforeEach(()=>{
    jasmine.clock().install();
    s = new AsyncService();
  });
  afterEach(()=>{
    jasmine.clock().uninstall()
  })
  it('should call nextDummy', ()=>{
    spyA = spyOn<any, any>(s, 'dummy').and.callThrough();
    // Now the dummy method is spied on, and called in reality
    spyB = spyOn<any, any>(s, 'nextDummy').and.callFake(()=>{
      console.log('I am a fake next dummy')
    })
    s.getData();
    jasmine.clock().tick(101)
    expect(spyA).toHaveBeenCalled();
    expect(spyB).toHaveBeenCalled();
    expect(spyA).toHaveBeenCalledBefore(spyB);
  })
  it('should return a value', ()=>{
    spyA = spyOn<any, any>(s, 'dummyIs3').and.returnValue(3);
    let testedVal = s.test();
    expect(testedVal).toBeTrue();
  })
})

// describe('Using a clock, tick and fake async', fakeAsync(()=>{

// }))
describe('Using a timeout in beforeEach and done argument',()=>{
  let lock = true;
  beforeEach(()=>{
    jasmine.clock().install()
    setTimeout(()=>{
      lock = false; 
    }, 1000);
    
  })
  afterEach(()=>{jasmine.clock().uninstall()})
  it('Should pass when unlocked', function(){
    jasmine.clock().tick(1001);
    expect(lock).toBeFalse();
  })
})


describe('fakeAsync',()=>{
  let lock = true;
  function unlock(){
    setTimeout(()=>{
      lock = false; 
    }, 1000);
  }

  afterEach(()=>{jasmine.clock().uninstall()})
  it('Should pass when unlocked', fakeAsync(function(){
    unlock();
    tick(1001);
    expect(lock).toBeFalse();
  }))
})


describe('A promise with then', ()=>{
  let s : AsyncService;
  
  beforeEach(function (this:any){
    s = new AsyncService();
    let that = this;
    return s.getData().then(function(val) {that.data=val});
  })
  it('should process data', function (this:any){
    let that = this;
    return s.transformWithWebWorder(this.data).then(
      function(val){
        expect(val).toEqual({a:that.data.a**2, b:that.data.b**2})
      }
    )
  })
})

describe('A async function', function(){
  let s : AsyncService;
  beforeEach(async function (this:any){
    s = new AsyncService();
    this.data = await s.getData();
  })
  it('should process data', async function (this:any){
    let processedData = await s.transformWithWebWorder(this.data);
    expect(processedData).toEqual({a:this.data.a**2, b:this.data.b**2})
  })  
})


