import { TestBed, inject } from '@angular/core/testing';

import { SpeakService } from './speak.service';

describe('SpeakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakService]
    });
  });

  it('should be created', inject([SpeakService], (service: SpeakService) => {
    expect(service).toBeTruthy();
  }));
});
