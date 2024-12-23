import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-render',
  standalone: true,
  template: `<div>{{ mathExpression }}</div>`,
  styleUrls: ['./math-render.component.css'], // Corrected
})
export class MathRenderComponent implements OnInit {
  @Input() mathExpression!: string;

  ngOnInit(): void {}
}
