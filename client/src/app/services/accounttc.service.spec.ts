import { TestBed } from '@angular/core/testing';

import { AccounttcService } from './accounttc.service';

describe('AccounttcService', () => {
  let service: AccounttcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccounttcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
