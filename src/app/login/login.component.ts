import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.user.email, this.user.password)) {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem('users');

      if (userData) {
        // Parse the JSON string back to an array of user objects
        const users = JSON.parse(userData);

        // Find the user with the matching email (assuming each user has a unique email)
        const loggedInUser = users.find(
          (user: any) => user.email === this.user.email
        );

        if (loggedInUser) {
          // Redirect to the profile page with the actual username and id
          this.router.navigate([
            '/profile',
            loggedInUser.username,
            loggedInUser.id,
          ]);
        } else {
          //  the case where the user is not found
          alert('User not found.');
        }
      } else {
        // the case where user data is not found in localStorage
        alert('User data not found in localStorage.');
      }
    } else {
      //  an error message
      alert('Invalid email or password. Please try again.');
    }
  }
}
