import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCssComponent } from './large-css.component';

describe('LargeCssComponent', () => {
  let component: LargeCssComponent;
  let fixture: ComponentFixture<LargeCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
