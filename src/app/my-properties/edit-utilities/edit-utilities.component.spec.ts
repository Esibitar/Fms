import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtilitiesComponent } from './edit-utilities.component';

describe('EditUtilitiesComponent', () => {
  let component: EditUtilitiesComponent;
  let fixture: ComponentFixture<EditUtilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUtilitiesComponent]
    });
    fixture = TestBed.createComponent(EditUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
