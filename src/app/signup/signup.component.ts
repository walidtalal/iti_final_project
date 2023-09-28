import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: any = {
    id: Date.now(),
    username: '',
    userType: 'client',
    skills: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Assuming your AuthService handles the registration process
    if (this.authService.register(this.user)) {
      // Redirect to the profile page after successful signup
      // Store the user data in localStorage

      this.router.navigate(['/profile', this.user.username, this.user.id]);
    } else {
      // Display an error message
      alert(
        'Username is already in use or invalid email/password. Please try again.'
      );
    }
  }
}
