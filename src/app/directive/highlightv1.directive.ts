import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightv1]'
})
export class Highlightv1Directive {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

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
