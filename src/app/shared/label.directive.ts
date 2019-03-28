import {AfterContentInit, Directive, DoCheck, ElementRef, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[label]'
})
export class LabelDirective implements AfterContentInit {
  value: any;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  @Input() set label(value) {
    this.value = value;
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  ngAfterContentInit() {
    this.viewContainer.get(0).rootNodes[0].value = this.value;
    console.log(this.viewContainer.get(0).rootNodes[0].value);
    console.log(this.templateRef);
  }
}
