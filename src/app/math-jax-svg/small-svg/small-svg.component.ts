import { Component } from '@angular/core';
import { MathRenderSvgComponent } from '../../math-render-svg/math-render-svg.component';
declare const MathJax: any;

@Component({
  selector: 'app-small-svg',
  standalone: true,
  imports: [MathRenderSvgComponent],
  templateUrl: './small-svg.component.html',
  styleUrl: './small-svg.component.css',
})
export class SmallSvgComponent {
  me1 = `$$\\zeta\\left(2\\right) = \\frac{\\pi^{2}}{6}$$`;
  me2 = `$$\\zeta\\left(4\\right) = \\frac{\\pi^{4}}{90}$$`;

  ngAfterViewInit(): void {
    this.renderMath();
  }

  renderMath(): void {
    MathJax.typesetPromise();
  }
}
