import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


export const hasRoleGuardService: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const userRole: any = inject(AuthService).getRole();
  const expectedRole: any = route.data['role'];
  const hasRole: boolean = expectedRole.some((role: any) => userRole.includes(role));
  return hasRole || router.navigate(['/dashboard']);    
}
