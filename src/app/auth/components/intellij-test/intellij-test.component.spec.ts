import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellijTestComponent } from './intellij-test.component';

describe('IntellijTestComponent', () => {
  let component: IntellijTestComponent;
  let fixture: ComponentFixture<IntellijTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntellijTestComponent]
    });
    fixture = TestBed.createComponent(IntellijTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
