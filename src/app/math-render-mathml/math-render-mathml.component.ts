import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-render-mathml',
  standalone: true,
  imports: [],
  template: `<div [innerHTML]="mathExpression"></div>`,
  styleUrl: './math-render-mathml.component.css',
})
export class MathRenderMathmlComponent {
  @Input() mathExpression!: string;

  ngOnInit(): void {
    console.log('MathML Expression:', this.mathExpression);
  }
}
