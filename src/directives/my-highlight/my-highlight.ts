import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[my-highlight]' // Attribute selector
})
export class MyHighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
