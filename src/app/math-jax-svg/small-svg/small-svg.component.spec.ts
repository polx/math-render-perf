import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSvgComponent } from './small-svg.component';

describe('SmallSvgComponent', () => {
  let component: SmallSvgComponent;
  let fixture: ComponentFixture<SmallSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
