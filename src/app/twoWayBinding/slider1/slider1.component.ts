import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.scss']
})
export class Slider1Component implements AfterViewInit {

  isActive: boolean = false;
  isPaused: boolean = false;
  trackLength: number = 0;
  private _currentSliderPosition: any = 0;
  
  currentTrackPosition: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  set currentSliderPosition(val:number){
    this._currentSliderPosition = val;
  }
  get currentSliderPosition() {
    return this._currentSliderPosition;
  }

  get label(){
    return this._currentSliderPosition / this.trackLength;
  }

  @ViewChild('slider') slider: any;
  @ViewChild('track') track: any;

  ngAfterViewInit(){
    this.trackLength = this.track.nativeElement.offsetWidth - this.slider.nativeElement.offsetWidth;
  }

  activateSlider(){
    this.isActive = true;
    this.isPaused = false;
  }
  disactiveteSlider(){
    this.isActive = false;
    this.isPaused = false;
  }
  slide(data:any){
    data.stopPropagation;
    if (this.isActive && !this.isPaused){
      let trackOffset = parseInt(data.target.parentNode.getBoundingClientRect().left)
      let sliderOffset = parseInt(data.target.getBoundingClientRect().left)
      let mousePosition = parseInt(data.clientX);
      let sliderToMouseOffset = mousePosition - sliderOffset;
      let plannedPosition = this.currentSliderPosition + data.movementX;
      if (this.isSliderOnTrack(plannedPosition)){
        console.log(`${plannedPosition}    ${this.trackLength}`)
        this.currentSliderPosition = plannedPosition;
      }
      console.log(`${plannedPosition}    ${this.trackLength}`)
      // this.currentSliderPosition += data.movementX;
      // console.log(this.currentSliderPosition)
    }
  }
  pauseSlider(data:any){
    data.stopPropagation;
    this.isPaused = true;
  }
  isSliderOnTrack(plannedPosition:number){
    return (plannedPosition > 0 && plannedPosition < this.trackLength)
  }
  unpauseSlider(data:any){
    data.stopPropagation;
    this.isPaused = false
    if (this.isActive){
      let plannedPosition = parseInt(data.clientX) - parseInt(data.target.getBoundingClientRect().left)
      if (this.isSliderOnTrack(plannedPosition)){
        this.currentSliderPosition = plannedPosition;
      }
      
       
    }
  }

  setSliderOnTrackClick(event:any){
    event.stopPropagation;
    this.isActive = true;
    if (event.target !== this.slider.nativeElement){
      this.currentSliderPosition = parseInt(event.clientX) - parseInt(event.target.getBoundingClientRect().left)
    }
  }

  updateCurrentTrackPosition(event:any){
    // console.log(this.slider)
    // console.log(event.target)
    // console.log(event.target === this.slider.nativeElement)
    // if (event.target !== this.slider.nativeElement){
    //   this.currentTrackPosition = event.target.getBoundingClientRect();
    //   console.log(event.target.parentNode.getBoundingClientRect())
    //   console.log(this.currentSliderPosition) 
    // }
  }

}
