import { TestBed } from '@angular/core/testing';

import { FakeModelsServiceService } from './fake-models-service.service';

describe('FakeModelsServiceService', () => {
  let service: FakeModelsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeModelsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
