import { TestBed } from '@angular/core/testing';

import { NgAmpDiagnosticsLoggerService } from './ng-amp-diagnostics-logger.service';

describe('NgAmpDiagnosticsLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgAmpDiagnosticsLoggerService = TestBed.get(NgAmpDiagnosticsLoggerService);
    expect(service).toBeTruthy();
  });
});
