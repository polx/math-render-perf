import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumJsComponent } from './medium-js.component';

describe('MediumJsComponent', () => {
  let component: MediumJsComponent;
  let fixture: ComponentFixture<MediumJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
