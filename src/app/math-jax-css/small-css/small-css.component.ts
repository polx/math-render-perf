import { Component } from '@angular/core';
import { MathRenderComponent } from '../../math-render/math-render.component';
declare const MathJax: any;

@Component({
  selector: 'app-small-css',
  standalone: true,
  imports: [MathRenderComponent],
  templateUrl: './small-css.component.html',
  styleUrls: ['./small-css.component.css'], // Corrected
})
export class SmallCssComponent {
  me1 = `$$\\zeta\\left(2\\right) = \\frac{\\pi^{2}}{6}$$`;
  me2 = `$$\\zeta\\left(4\\right) = \\frac{\\pi^{4}}{90}$$`;

  ngAfterViewInit(): void {
    this.renderMath();
  }

  renderMath(): void {
    MathJax.typesetPromise();
  }
}
