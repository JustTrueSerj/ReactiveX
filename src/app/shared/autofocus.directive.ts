import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.autofocus = true;
  }

}
