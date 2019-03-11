import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appMenuItemToggle]'
})
export class MenuItemToggleDirective {

  @Input('appMenuItemToggle') subMenuItem: ElementRef;
  toggle: boolean;

  constructor(public el: ElementRef, private renderer: Renderer2) {
    this.toggle = false;
  }

  @HostListener('click') onMouseClick() {
    console.log(this.subMenuItem);
    console.log(this.el.nativeElement);

    this.toggle = !this.toggle;

    if (this.toggle) {
      this.renderer
        .removeClass(
          this.subMenuItem,
          'd-none'
        );

      this.renderer
        .addClass(
          this.el.nativeElement,
          'active'
        );

    } else {
      this.renderer
        .addClass(
          this.subMenuItem,
          'd-none'
        );

      this.renderer
        .removeClass(
          this.el.nativeElement,
          'active'
        );
    }
  }
}
