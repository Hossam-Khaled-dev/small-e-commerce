import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LighBox]'
})
export class LighBoxDirectiv implements OnChanges  {

@Input('LighBox') highlightedColor : string = "darkblue";
@Input() defaultColor : string = "grey";
  constructor(private elemetRef:ElementRef) { 
    
  }
  ngOnChanges(): void {
    this.elemetRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

 @HostListener('mouseover') onMouseOver()
  {
    this.elemetRef.nativeElement.style.border = `3px solid ${this.highlightedColor}`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemetRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

}
