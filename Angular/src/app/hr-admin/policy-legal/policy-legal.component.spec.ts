import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyLegalComponent } from './policy-legal.component';

describe('PolicyLegalComponent', () => {
  let component: PolicyLegalComponent;
  let fixture: ComponentFixture<PolicyLegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyLegalComponent]
    });
    fixture = TestBed.createComponent(PolicyLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
