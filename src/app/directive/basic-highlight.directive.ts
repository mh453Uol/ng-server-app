import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  // access to the element directive is applied on
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onmouseenter() {
    // const r = Math.floor((Math.random() * 255) + 1);
    // const g = Math.floor((Math.random() * 255) + 1);
    // const b = Math.floor((Math.random() * 255) + 1);

    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   `rgb(${r},${g},${b})`
    // );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    // const r = Math.floor((Math.random() * 255) + 1);
    // const g = Math.floor((Math.random() * 255) + 1);
    // const b = Math.floor((Math.random() * 255) + 1);

    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
