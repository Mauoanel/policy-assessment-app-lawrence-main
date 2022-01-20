import { TestBed } from '@angular/core/testing';

import { SessionTokenHolderService } from './session-token-holder.service';

describe('SessionTokenHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionTokenHolderService = TestBed.get(SessionTokenHolderService);
    expect(service).toBeTruthy();
  });
});
