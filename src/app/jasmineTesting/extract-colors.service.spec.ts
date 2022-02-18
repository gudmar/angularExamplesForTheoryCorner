import { TestBed } from '@angular/core/testing';

import { ExtractColorsService } from './extract-colors.service';

const tests_colorStringToNumber = [
  {name: 'Should get 16777215 from #ffffff', input: '#ffffff', output: 16777215},
  {name: 'Should get 15728640 from #f00000', input: '#f00000', output: 15728640},
  {name: 'Should get 15 from #00000f', input: '#00000f', output: 15},
  {name: 'Should get 4413295 from #43576f', input: '#43576f', output: 4413295},
]
const test_getBlue = [
  {name: 'Should get 255 from #ffffff', input: '#ffffff', output: 255},
  {name: 'Should get 0 from #f00000', input: '#f00000', output: 0},
  {name: 'Should get 15 from #00000f', input: '#00000f', output: 15},  
  {name: 'Should get 111 from #43576f', input: '#43576f', output: 111},
]
const test_getGreen = [
  {name: 'Should get 65280 from #ffffff', input: '#ffffff', output: 65280},
  {name: 'Should get 0 from #f00000', input: '#f00000', output: 0},
  {name: 'Should get 15 from #00000f', input: '#00000f', output: 0},  
  {name: 'Should get 22272 from #43576f', input: '#43576f', output: 22272},
]

const test_removeBlue = [
  {name: 'Should get #ffff00 from #ffffff', input: '#ffffff', output: '#ffff00'},
  {name: 'Should get #123400 from #123456', input: '#123456', output: '#123400'},
]
const test_removeGreen = [
  {name: 'Should get #ff00ff from #ffffff', input: '#ffffff', output: '#ff00ff'},
  {name: 'Should get #120056 from #123456', input: '#123456', output: '#120056'},
]
const test_removeRed = [
  {name: 'Should get #00ffff from #ffffff', input: '#ffffff', output: '#00ffff'},
  {name: 'Should get #003456 from #123456', input: '#123456', output: '#003456'},
]


describe('testing color removal: ', ()=>{
  const colorExtractor = new ExtractColorsService();
  let counter = 0;
  
  beforeEach(function ( this:any ) {
    counter++;
    this.customMessage = `Leaving this message by the PARENT`
  })
  describe('removeBlue()', function (this:any){
    this.customNested = `Leaving CHILD this message by the ${counter} beforeEach`
    const testedFunction = colorExtractor.getFiltered.bind(colorExtractor);
    for (let testCase of test_removeBlue){
      it(testCase.name, () => {
        console.info('The this ', this);
        expect(testedFunction(6, testCase.input)).toBe(testCase.output);
      })
    }
  });

  describe('removeGreen()', ()=>{
    const testedFunction = colorExtractor.getFiltered.bind(colorExtractor);
    for (let testCase of test_removeGreen){
      it(testCase.name, () => {
        expect(testedFunction(5, testCase.input)).toBe(testCase.output);
      })
    }
  });

  describe('removeRed()', ()=>{
    const testedFunction = colorExtractor.getFiltered.bind(colorExtractor);
    for (let testCase of test_removeRed){
      it(testCase.name, () => {
        expect(testedFunction(3, testCase.input)).toBe(testCase.output);
      })
    }
    xit('Error', ()=>{ let a:any = {}; expect(a.b.b.b).toBe(8) })
      // will not fail despite typeError, as is xit
    xit('matcherTests', ()=> {
      let set = new Set();
      set.add(4);set.add(5);
      let map = new Map();
      map.set('a', 4);
      expect([1,2,3]).toContain(3)
      expect('Grzegorz Brzęczyszczykiewicz').toContain("Grzegorz")
      expect(set).toContain(4)
      // expect(map).toContain(['a',4]) no support for maps or objects
    })
  });

  xit('Testing THIS in parent', function(this:any) {
    console.info('THIS in parent', this);
    expect(1).toBe(1);
  })

})


describe('colorStringToNumber tests: ', ()=>{
  let colorExtractor = new ExtractColorsService();
  let testedFunction = colorExtractor.colorStringToNumber;
  for (let testCase of (tests_colorStringToNumber)){
    it(testCase.name, ()=>{
      expect(testedFunction(testCase.input)).toBe(testCase.output);
    })
  }
})

describe('testing getBlue and getGreen: ', ()=>{
  const colorExtractor = new ExtractColorsService();
  describe('getBlue()', ()=>{
    const testedFunction = colorExtractor.getBlue.bind(colorExtractor);
    for (let testCase of test_getBlue){
      it(testCase.name, () => {
        expect(testedFunction(testCase.input)).toBe(testCase.output);
      })
    }
  });

  describe('getGreen()', ()=>{
    const testedFunction = colorExtractor.getGreen.bind(colorExtractor);
    for (let testCase of test_getGreen){
      it(testCase.name, () => {
        expect(testedFunction(testCase.input)).toBe(testCase.output);
      })
    }
  })  
})



describe('ExtractColorsService', () => {
  let service: ExtractColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
