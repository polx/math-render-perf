import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-render-svg',
  standalone: true,
  template: `<div>{{ mathExpression }}</div>`,
  styleUrls: ['./math-render-svg.component.css'], // Optional CSS for styling
})
export class MathRenderSvgComponent implements OnInit {
  @Input() mathExpression!: string;
  ngOnInit(): void {}
}
