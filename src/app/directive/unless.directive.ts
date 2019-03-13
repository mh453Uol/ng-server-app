import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  // templateRef = template which contains the html
  // viewContainerRef = place we render the template to
  constructor(private templateRef: TemplateRef<any>,
     private viewContainerRef: ViewContainerRef) {}
}
