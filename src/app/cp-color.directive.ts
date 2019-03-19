import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[cpColor]'
})
export class CpColorDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = 'red';
  }

  change(changedColor: String) {
    this.elRef.nativeElement.style.color = changedColor;
  }
}
