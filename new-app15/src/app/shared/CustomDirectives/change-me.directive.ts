import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color = "red",
    this.el.nativeElement.style.backgroundColor = "yellow",
    this.el.nativeElement.style.innerHtml = "Hello Soha"
  }

}
