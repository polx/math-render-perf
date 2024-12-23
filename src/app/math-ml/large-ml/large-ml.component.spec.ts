import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeMlComponent } from './large-ml.component';

describe('LargeMlComponent', () => {
  let component: LargeMlComponent;
  let fixture: ComponentFixture<LargeMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeMlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
