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



describe('JasmineTestComponent', () => {
  let component: JasmineTestComponent;
  let fixture: ComponentFixture<JasmineTestComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasmineTestComponent ],
      imports: [FormsModule] // !!!! FOR ngModel
    })
    .compileComponents();
  });

  beforeEach(function(this:any){
    fixture = TestBed.createComponent(JasmineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    this.inputColor = fixture.nativeElement.querySelector('[type="color"]');
    this.checkGreen = fixture.nativeElement.querySelector('#green');
    this.checkRed = fixture.nativeElement.querySelector('#red');
    this.checkBlue = fixture.nativeElement.querySelector('#blue');
    this.colorOutlet = fixture.nativeElement.querySelector('.colorOutlet');
    console.dir(fixture.nativeElement)
  });

  function getElementStyleColor(el:any){
    console.dir(el)
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
      console.dir(this.colorOutlet)
    })
  });

  it('should all checkboxes be checked on start', function(this:any) {

    fixture.detectChanges();
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      expect(this.checkBlue.value).toBeTrue();
      expect(this.checkGreen.value).toBeTrue();
      expect(this.checkRed.value).toBeTrue();
      
    })
  });
  
  it('unchecking blue should result in rgb(0, 10, 0)', function(this:any) {

    fixture.detectChanges();
    fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
      let that = this;
      this.checkBlue.value = false;
      this.checkBlue.dispatchEvent(new Event('input'));
      fixture.whenStable().then(()=>{
        expect(that.colorOutlet.value).toBe('rgb(0, 10, 0)');
      })
      
    })
  });

  // it('unchecking green should result in rgb(0, 0, 170)', function(this:any) {

  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{  // OR fakeAsync tick !!!!!
  //     let that = this;
  //     this.checkGreen.value = false;
  //     this.checkGreen.dispatchEvent(new Event('input'));
  //     fixture.whenStable().then(()=>{
  //       expect(that.colorOutlet.value).toBe('rgb(0, 0, 170)');
  //     })
      
  //   })
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// https://shekhargulati.com/2017/07/13/unit-testing-ngmodel-in-angular-4/
