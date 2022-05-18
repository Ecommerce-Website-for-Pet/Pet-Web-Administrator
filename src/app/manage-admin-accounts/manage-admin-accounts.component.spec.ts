import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdminAccountsComponent } from './manage-admin-accounts.component';

describe('ManageAdminAccountsComponent', () => {
  let component: ManageAdminAccountsComponent;
  let fixture: ComponentFixture<ManageAdminAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdminAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
