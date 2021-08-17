/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SctService } from './sct.service';

describe('Service: Sct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SctService]
    });
  });

  it('should ...', inject([SctService], (service: SctService) => {
    expect(service).toBeTruthy();
  }));
});
