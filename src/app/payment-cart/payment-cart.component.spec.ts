import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCartComponent } from './payment-cart.component';

describe('PaymentCartComponent', () => {
  let component: PaymentCartComponent;
  let fixture: ComponentFixture<PaymentCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCartComponent]
    });
    fixture = TestBed.createComponent(PaymentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
