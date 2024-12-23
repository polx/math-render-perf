import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMlComponent } from './small-ml.component';

describe('SmallMlComponent', () => {
  let component: SmallMlComponent;
  let fixture: ComponentFixture<SmallMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallMlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
