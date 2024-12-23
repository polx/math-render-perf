import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumMlComponent } from './medium-ml.component';

describe('MediumMlComponent', () => {
  let component: MediumMlComponent;
  let fixture: ComponentFixture<MediumMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumMlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
