import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCssComponent } from './medium-css.component';

describe('MediumCssComponent', () => {
  let component: MediumCssComponent;
  let fixture: ComponentFixture<MediumCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
