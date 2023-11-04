import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStockOptionComponent } from './employee-stock-option.component';

describe('EmployeeStockOptionComponent', () => {
  let component: EmployeeStockOptionComponent;
  let fixture: ComponentFixture<EmployeeStockOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeStockOptionComponent]
    });
    fixture = TestBed.createComponent(EmployeeStockOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
