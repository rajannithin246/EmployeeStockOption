import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestingDetailsComponent } from './vesting-details.component';

describe('VestingDetailsComponent', () => {
  let component: VestingDetailsComponent;
  let fixture: ComponentFixture<VestingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestingDetailsComponent]
    });
    fixture = TestBed.createComponent(VestingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
