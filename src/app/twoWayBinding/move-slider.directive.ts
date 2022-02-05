import { Directive, ElementRef, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[moveSlider]'
})
export class MoveSliderDirective {
  elRef: ElementRef;
  trackRef: ElementRef;
  active = false;
  paused = true;
  startX: number = 0;
  constructor(elRef:ElementRef) { 
    this.elRef = elRef;
    this.trackRef = elRef.nativeElement.parentElement;
  }

  @HostListener('mousedown', ['$event'])
  activateMovement(event: MouseEvent){
    this.active = true;
    this.paused = false;
    let sliderX = this.elRef.nativeElement.offsetLeft;
    this.startX = event.pageX - sliderX;
    console.log(this.startX)
  }

  @HostListener('document:mouseup', ['$event'])
  disactivateMovement(event:MouseEvent){
    this.active = false;
    this.paused = true;
    console.log(this.paused)
  }

  @HostListener('document:mousemove', ['$event'])
  moveSlider(event:MouseEvent){
    this.elRef.nativeElement.style.left = this.calculateNewPosition(event.pageX);
    console.log(this.calculateNewPosition(event.pageX))
  }

  calculateNewPosition(newX:number){
    return newX - this.startX; 
  }


}
