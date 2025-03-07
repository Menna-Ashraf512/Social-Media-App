import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const pLATFORM_ID = inject(PLATFORM_ID)
  const token = localStorage.getItem('token')
  if(isPlatformBrowser(pLATFORM_ID)){
    if(token){
      router.navigate(['/timeLine'])
      return false;
    }else{
      return true;
    }
  }
  return true;
};
