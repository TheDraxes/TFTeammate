import { TestBed } from '@angular/core/testing';

import { ChampServiceService } from './champ-service.service';

describe('ChampServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampServiceService = TestBed.get(ChampServiceService);
    expect(service).toBeTruthy();
  });
});
