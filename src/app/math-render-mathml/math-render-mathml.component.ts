import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-math-render-mathml',
  standalone: true,
  imports: [],
  template: `<div [innerHTML]="mathExpression"></div>`,
  styleUrl: './math-render-mathml.component.css',
})
export class MathRenderMathmlComponent {
  @Input() mathExpression!: any;

  constructor(private sanitizer: DomSanitizer) {
    // Bypassing Angular's HTML sanitizer
    this.mathExpression = this.sanitizer
      .bypassSecurityTrustHtml(this.mathExpression);
  }

  ngOnInit(): void {
    console.log('MathML Expression:', this.mathExpression);
  }
}
