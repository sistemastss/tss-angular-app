import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  @Input('appModal') appModal: ElementRef;

  constructor(private el: ElementRef, private render: Renderer2) {
  }

}
