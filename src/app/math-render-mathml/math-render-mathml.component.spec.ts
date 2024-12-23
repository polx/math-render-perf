import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathRenderMathmlComponent } from './math-render-mathml.component';

describe('MathRenderMathmlComponent', () => {
  let component: MathRenderMathmlComponent;
  let fixture: ComponentFixture<MathRenderMathmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathRenderMathmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathRenderMathmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
