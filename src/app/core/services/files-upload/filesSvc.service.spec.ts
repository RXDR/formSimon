/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilesSvcService } from './filesSvc.service';

describe('Service: FilesSvc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesSvcService]
    });
  });

  it('should ...', inject([FilesSvcService], (service: FilesSvcService) => {
    expect(service).toBeTruthy();
  }));
});
