import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedNominationsComponent } from './approved-nominations.component';

describe('ApprovedNominationsComponent', () => {
  let component: ApprovedNominationsComponent;
  let fixture: ComponentFixture<ApprovedNominationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedNominationsComponent]
    });
    fixture = TestBed.createComponent(ApprovedNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
