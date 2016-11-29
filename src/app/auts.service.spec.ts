import { TestBed, async, inject } from '@angular/core/testing';
import { AutsService } from './auts.service';

describe('AutsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutsService]
    });
  });

  it('should ...', inject([AutsService], (service: AutsService) => {
    expect(service).toBeTruthy();
  }));
});
