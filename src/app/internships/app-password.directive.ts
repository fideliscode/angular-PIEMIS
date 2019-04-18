import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {
 private _shown = false;

constructor(private el: ElementRef) {
    this.setup();
  }

toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<button class="btn btn-small btn-success">  Hide </button> ';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<button class="btn btn-small btn-success">  Show</button>';
    }
  }

setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = '<button class="btn btn-small btn-success" style="background-color:#008d0d;">  Show </button>';
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}