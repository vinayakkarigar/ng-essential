import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeBgColor(this.color);
  }

  color = 'green';

  @HostBinding('style.border') border: string;

  @HostListener('click') onClick(){
    window.alert('I am clicked !!!!')
  }

  @HostListener('mouseover') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
    this.border = '5px solid green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

  changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
