import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  private menuItem;
  private isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onclick() {
    // show the content
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(this.menuItem, 'show');
    } else {
      this.renderer.removeClass(this.menuItem, 'show');
    }
    console.log('OnClick::DropdownDirective');
  }

  ngAfterViewInit(): void {
    this.menuItem = this.elementRef.nativeElement.querySelector(
      '.dropdown-menu'
    );
  }
}
