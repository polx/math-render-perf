import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumSvgComponent } from './medium-svg.component';

describe('MediumSvgComponent', () => {
  let component: MediumSvgComponent;
  let fixture: ComponentFixture<MediumSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
