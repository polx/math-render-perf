import { Component, AfterViewInit } from '@angular/core';
declare const MathJax: any;

@Component({
  selector: 'app-small-js',
  standalone: true,
  templateUrl: './small-js.component.html',
  styleUrls: ['./small-js.component.css'],
})
export class SmallJsComponent implements AfterViewInit {
  me1 = `$$\\zeta\\left(2\\right) = \\frac{\\pi^{2}}{6}$$`;
  me2 = `$$\\zeta\\left(4\\right) = \\frac{\\pi^{4}}{90}$$`;

  ngAfterViewInit(): void {
    this.renderMath();
  }

  renderMath(): void {
    if(MathJax.typesetPromise) MathJax.typesetPromise();
  }
}
