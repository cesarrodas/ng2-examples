import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  constructor(private el: ElementRef) { }
  @Input() defaultColor: string;
  @Input('myHighlight') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.highlightColor);
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
