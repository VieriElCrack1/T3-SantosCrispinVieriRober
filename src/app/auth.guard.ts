import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(AuthService);
  const router = inject(Router);
  const valueLogged = service.isLogged();

  if(valueLogged) {
    return true;
  }

  router.navigate(["login"], {queryParams: {blocked : state.url}});
  return false;
};
