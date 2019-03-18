import {Directive, HostListener, ElementRef, Renderer2, Input, OnInit} from '@angular/core';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appHighlightv2]'
})
export class Highlightv2Directive implements OnInit {

  @Input() defaultColor = 'pink';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('Setting Color');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') onmouseenter() {
    console.log('Highlighv1Directiv::eonmouseenter');
    const rgbStyle = this.getRandomRGB();
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', rgbStyle);
  }

  @HostListener('mouseleave') onmouseleave() {
    console.log('Highlighv1Directiv::onmouseleave');
    const rgbStyle = this.getRandomRGB();
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', rgbStyle);
  }

  private getRandomRGB(): string {
    const r = Math.floor((Math.random() * 255) + 1);
    const g = Math.floor((Math.random() * 255) + 1);
    const b = Math.floor((Math.random() * 255) + 1);

    return `rgb(${r},${g},${b})`;
  }

}
