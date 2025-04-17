import { TestBed } from '@angular/core/testing';

import { HasRoleGuardService } from './has-role-guard.service';

describe('HasRoleGuardService', () => {
  let service: HasRoleGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasRoleGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
