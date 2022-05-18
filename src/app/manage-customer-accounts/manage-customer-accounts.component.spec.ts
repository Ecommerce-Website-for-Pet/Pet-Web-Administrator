import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerAccountsComponent } from './manage-customer-accounts.component';

describe('ManageCustomerAccountsComponent', () => {
  let component: ManageCustomerAccountsComponent;
  let fixture: ComponentFixture<ManageCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
