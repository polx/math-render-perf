import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeSvgComponent } from './large-svg.component';

describe('LargeSvgComponent', () => {
  let component: LargeSvgComponent;
  let fixture: ComponentFixture<LargeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
