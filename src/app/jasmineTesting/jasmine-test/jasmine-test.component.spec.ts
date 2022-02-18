import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineTestComponent } from './jasmine-test.component';
import { ExtractColorsService } from '../extract-colors.service';
import { FormsModule } from '@angular/forms';

class MockExtractColorsService {
  currentColor = '#000000';
  getFiltered(colorFlag:number, color:string){
    return this.currentColor;
  }
  setCurrentColor(color:string){
    this.currentColor = color;
  }
}



fdescribe('JasmineTestComponent', () => {
  let component: JasmineTestComponent;
  let fixture: ComponentFixture<JasmineTestComponent>;
  let service: MockExtractColorsService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasmineTestComponent ],
      providers: [{provide: ExtractColorsService, useClass: MockExtractColorsService}],
      imports: [FormsModule] // !!!! FOR ngModel
    })
    .compileComponents();
  });

  beforeEach(function(this:any){
    fixture = TestBed.createComponent(JasmineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    this.service = TestBed.get(ExtractColorsService)
    this.inputColor = fixture.nativeElement.querySelector('[type="color"]');
    this.checkGreen = fixture.nativeElement.querySelector('#green');
    this.checkRed = fixture.nativeElement.querySelector('#red');
    this.checkBlue = fixture.nativeElement.querySelector('#blue');
    this.colorOutlet = fixture.nativeElement.querySelector('.colorOutlet');

  });

  function getElementStyleColor(el:any){
    return el.style.backgroundColor;
    // return el.
  }

  function getIngredianceFromRGB(rgb:string, ingrediance: 'red' | 'green' | 'blue'){
    let leftBracketRemoved = rgb.split('(')[1];
    let rightBracketRemoved = leftBracketRemoved.split('(')[0];
    let arrOfIngrediances = rightBracketRemoved.split(',');
    if (ingrediance === 'red') return arrOfIngrediances[0];
    if (ingrediance === 'green') return arrOfIngrediances[1];
    return arrOfIngrediances[2];
  }

  function getBlue(rgb:string){return getIngredianceFromRGB(rgb, 'blue')}
  function getGreen(rgb:string){return getIngredianceFromRGB(rgb, 'green')}
  function getRed(rgb:string){return getIngredianceFromRGB(rgb, 'red')}

  it('should start with inputColor and colorOutlet #000aaa', function(this:any) {
    expect(component.inputColor).toBe('#000aaa');
    fixture.detectChanges();
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      expect(this.inputColor.value).toBe('#000aaa')
      expect(getElementStyleColor(this.colorOutlet)).toBe('rgb(0, 10, 170)')
    })
  });

  it('should all checkboxes be checked on start', function(this:any) {

    fixture.detectChanges();
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      expect(this.checkBlue.checked).toBeTrue();
      expect(this.checkGreen.checked).toBeTrue();
      expect(this.checkRed.checked).toBeTrue();
      // expect(this.checkRed.value).toBeTrue(); // nie value
      
    })
  });
  
  it('unchecking blue should result in rgb(0, 10, 0)', function(this:any) {
    this.service.setCurrentColor('#000aaa')
    fixture.detectChanges();
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      let that = this;
      this.checkBlue.click();// = false;
      // this.checkBlue.checked;  i value nie dawalo rady
      this.service.setCurrentColor('#000a00')
      this.checkBlue.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        // debugger;
        expect(getElementStyleColor(this.colorOutlet.style.backgroundColor)).toBe('rgb(0, 10, 0)');
      })
      
    })
  });

  xit('Changing the color input box', function(this:any) {
    fixture.detectChanges(); // initiate component, align internal state with DOM
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      // let that = this; 
      this.inputColor.value = '#ffffff' // set input initial value to white
      this.inputColor.dispatchEvent(new Event('input')); 
         // 'change' event does not make change to be known by formsModule
      fixture.detectChanges(); // update model and rest of the view
      fixture.whenStable().then(()=>{
        expect(getElementStyleColor(this.colorOutlet)).toBe('rgb(255, 255, 255)');
      })
      
    })
  });

  // it('should change the colorOutlet from rgb(0, 10, 170) to rgb(0, 0, 170) after unchecking green', function(this:any) {

  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
  //     let that = this;
  //     expect(that.colorOutlet.style.backgroundColor).toBe('rgb(0, 10, 170)');
  //     this.checkGreen.click(); // changing the value of the checkbox does not uncheck it
  //     fixture.detectChanges();
  //     fixture.whenStable().then(()=>{
  //       expect(that.colorOutlet.style.backgroundColor).toBe('rgb(0, 0, 170)');
  //     })
      
  //   })
  // });


  it('should filter colorOutlet after unchecking a checkbox', async function(this:any) {
    let that = this;
    let testCases = [
      {element: this.checkBlue, output:'rgb(255, 255, 0)', serviceValue: '#ffff00', property: 'isBlueOn'},
      {element: this.checkGreen, output:'rgb(255, 0, 255)', serviceValue: '#ff00ff', property: 'isGreenOn'},
      {element: this.checkRed, output:'rgb(0, 255, 255)', serviceValue: '#00ffff', property: 'isRedOn'},
    ]
    async function teardown(){
      for(let testCase of testCases){
        if (!testCase.element.checked){testCase.element.click();}
      }
      that.inputColor.value = '#000aaa';
      that.service.setCurrentColor('#000aaa')
      that.inputColor.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable().then(()=>{
        expect(that.colorOutlet.style.backgroundColor).toBe('rgb(0, 10, 170)');
      })
    }

    for (let testCase of testCases){
      fixture.detectChanges();
      await fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
        this.inputColor.value = '#ffffff' // set input initial value to white
        this.service.setCurrentColor('#ffffff');
        that.inputColor.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
          // debugger
          
          expect(that.colorOutlet.style.backgroundColor).toBe('rgb(255, 255, 255)');
          that.service.setCurrentColor(testCase.serviceValue)
          console.info('service valiue', testCase.serviceValue)
          testCase.element.click(); // changing the value of the checkbox does not uncheck it
          // console.log('???????????????????????//')

          fixture.detectChanges();
          let p = testCase.property
          console.info('==== ', p)
          console.log(component[p])
          // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

          // console.info(' COPONENT ' , component['testCase.property'])
          fixture.whenStable().then(()=>{
            // console.info(' COPONENT ' , component)
            // let method = component[testCase.property]
            // expect(testCase[component.property])
            // debugger
            expect(that.colorOutlet.style.backgroundColor).toBe(testCase.output);
            teardown();
          })
          
        })
      })
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// https://shekhargulati.com/2017/07/13/unit-testing-ngmodel-in-angular-4/
