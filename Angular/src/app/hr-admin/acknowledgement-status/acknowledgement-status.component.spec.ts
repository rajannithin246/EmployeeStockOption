import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementStatusComponent } from './acknowledgement-status.component';

describe('AcknowledgementStatusComponent', () => {
  let component: AcknowledgementStatusComponent;
  let fixture: ComponentFixture<AcknowledgementStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcknowledgementStatusComponent]
    });
    fixture = TestBed.createComponent(AcknowledgementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
