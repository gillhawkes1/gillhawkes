import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavButtonHover]',
  standalone: true
})
export class NavButtonHoverDirective {

  @Input('appNavButtonHover') backgroundColor: string = '';
  @Input('appNavButtonHover') textColor: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() : void {
    const el = this.el.nativeElement;
    this.backgroundColor = window.getComputedStyle(el).backgroundColor;
    this.textColor = window.getComputedStyle(el).color;

    el.style.backgroundColor = this.textColor;
    el.style.color = this.backgroundColor;
  }

  @HostListener('mouseleave') onMouseLeave() : void {
    const el = this.el.nativeElement;
    el.style.color = this.textColor;
    el.style.backgroundColor = this.backgroundColor;
  }

}
