import { TestBed } from '@angular/core/testing';

import { DataTranslationHelperService } from './data-translation-helper.service';

describe('DataTranslationHelperService', () => {
  let service: DataTranslationHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTranslationHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
