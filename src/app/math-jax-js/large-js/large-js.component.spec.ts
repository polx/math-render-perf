import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeJsComponent } from './large-js.component';

describe('LargeJsComponent', () => {
  let component: LargeJsComponent;
  let fixture: ComponentFixture<LargeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
