import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystationDetailComponent } from './paystation-detail.component';

describe('PaystationDetailComponent', () => {
  let component: PaystationDetailComponent;
  let fixture: ComponentFixture<PaystationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaystationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaystationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
