import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathRenderSvgComponent } from './math-render-svg.component';

describe('MathRenderSvgComponent', () => {
  let component: MathRenderSvgComponent;
  let fixture: ComponentFixture<MathRenderSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathRenderSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathRenderSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
