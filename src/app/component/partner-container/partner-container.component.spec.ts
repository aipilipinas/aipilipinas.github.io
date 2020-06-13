import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerContainerComponent } from './partner-container.component';

describe('PartnerContainerComponent', () => {
  let component: PartnerContainerComponent;
  let fixture: ComponentFixture<PartnerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
