import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasesComponent } from './leases.component';

describe('LeasesComponent', () => {
  let component: LeasesComponent;
  let fixture: ComponentFixture<LeasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeasesComponent]
    });
    fixture = TestBed.createComponent(LeasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
