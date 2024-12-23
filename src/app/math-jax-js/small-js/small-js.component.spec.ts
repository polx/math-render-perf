import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallJsComponent } from './small-js.component';

describe('SmallJsComponent', () => {
  let component: SmallJsComponent;
  let fixture: ComponentFixture<SmallJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
