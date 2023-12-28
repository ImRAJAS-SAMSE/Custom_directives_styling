import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyling]',
  standalone: true,
})
export class CustomStylingDirective {
  constructor(public obj: ElementRef) {
    this.obj.nativeElement.style.background = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
    this.obj.nativeElement.style.fontStyle = 'italic';
  }
}
