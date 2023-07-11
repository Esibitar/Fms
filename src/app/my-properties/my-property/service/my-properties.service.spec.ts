import { TestBed } from '@angular/core/testing';

import { MyPropertiesService } from './my-properties.service';

describe('MyPropertiesService', () => {
  let service: MyPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
