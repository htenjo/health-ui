import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() : boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();
      return false;
    }
  }
}
