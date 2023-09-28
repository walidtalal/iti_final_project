import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      const requestedUsername = route.paramMap.get('username'); // Assuming 'username' is part of the route
      const currentUser = this.authService.getCurrentUser();

      // Check if the requested profile matches the currently authenticated user
      if (currentUser && currentUser.username === requestedUsername) {
        return true; // User is allowed to access their own profile
      } else {
        // User is authenticated but trying to access another user's profile
        this.router.navigate(['/login']);
        return false;
      }
    }

    // User is not authenticated, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
