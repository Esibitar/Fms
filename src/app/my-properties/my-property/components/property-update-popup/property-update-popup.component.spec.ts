import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUpdatePopupComponent } from './property-update-popup.component';

describe('PropertyUpdatePopupComponent', () => {
  let component: PropertyUpdatePopupComponent;
  let fixture: ComponentFixture<PropertyUpdatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyUpdatePopupComponent]
    });
    fixture = TestBed.createComponent(PropertyUpdatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
