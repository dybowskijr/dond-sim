import { TestBed } from '@angular/core/testing';

import { CaseService } from './case.service';
import { Case } from './case';

describe('CaseService', () => {
  let service: CaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check out values array', () => {
    service.createNewCases();
    let cases: Case[] = service.getCases();
    expect(cases.length).toEqual(6);
  });
});
