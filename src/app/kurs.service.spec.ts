import { TestBed, async, inject } from '@angular/core/testing';
import { KursService } from './kurs.service';

describe('KursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KursService]
    });
  });

  it('should ...', inject([KursService], (service: KursService) => {
    expect(service).toBeTruthy();
  }));
});
