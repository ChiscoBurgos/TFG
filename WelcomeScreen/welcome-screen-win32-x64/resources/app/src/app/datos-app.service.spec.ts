import { TestBed, inject } from '@angular/core/testing';

import { DatosAppService } from './datos-app.service';

describe('DatosAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosAppService]
    });
  });

  it('should be created', inject([DatosAppService], (service: DatosAppService) => {
    expect(service).toBeTruthy();
  }));
});
