import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPreserveFormatting]'
})
export class PreserveFormattingDirective implements OnInit{

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'white-space', 'pre-wrap');

      this.renderer.setStyle(this.elementRef.nativeElement,
      'display', 'block');

      this.renderer.setStyle(this.elementRef.nativeElement,
        'font-family', 'monospace');
  }
}
