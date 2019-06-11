import { TestBed } from '@angular/core/testing';

import { TranformDataService } from './tranform-data.service';

describe('TranformDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranformDataService = TestBed.get(TranformDataService);
    expect(service).toBeTruthy();
  });
});
