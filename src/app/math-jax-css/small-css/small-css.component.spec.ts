import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCssComponent } from './small-css.component';

describe('SmallCssComponent', () => {
  let component: SmallCssComponent;
  let fixture: ComponentFixture<SmallCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
