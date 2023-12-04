import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatcherScheduleComponent } from './dispatcher-schedule.component';

describe('DispatcherScheduleComponent', () => {
  let component: DispatcherScheduleComponent;
  let fixture: ComponentFixture<DispatcherScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispatcherScheduleComponent]
    });
    fixture = TestBed.createComponent(DispatcherScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
