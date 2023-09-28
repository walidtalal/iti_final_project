// import { Component } from '@angular/core';
// import { Router } from '@angular/router'; // Import the Router service

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent {
//   registrationForm: any; // or FormGroup

//   user: any = {
//     id: Date.now(), // Generate a unique ID for the user (you can use a different method)
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     gender: '',
//     address: '',
//     dob: '',
//     acceptPrivacyPolicy: false,
//     username: '',
//   };

//   constructor(private router: Router) {} // Inject the Router service

//   onSubmit() {
//     // Check if the username is unique
//     if (this.isUsernameUnique(this.user.username)) {
//       // Username is unique, proceed with the signup process
//       this.saveUserToLocalStorage(this.user);
//       alert('Signup successful! You can now log in.'); // Show a success message

//       // Redirect to the profile page
//       this.router.navigate(['/profile']);
//     } else {
//       // Username is already in use, show an error message or handle it accordingly
//       alert('Username is already in use. Please choose a different username.');
//     }
//   }

//   // Function to check if the entered username is unique
//   private isUsernameUnique(username: string): boolean {
//     // Load existing users from localStorage (replace with your logic)
//     const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

//     // Check if any existing user has the same username
//     return !existingUsers.some((user: any) => user.username === username);
//   }

//   // Function to save user data to localStorage
//   private saveUserToLocalStorage(user: any): void {
//     // Load existing users from localStorage (replace with your logic)
//     const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

//     // Add the new user to the list of existing users
//     existingUsers.push(user);

//     // Save the updated list of users back to localStorage
//     localStorage.setItem('users', JSON.stringify(existingUsers));
//   }

// }

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
<<<<<<< HEAD
    userType: 'client',
    skills: '',
=======
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Assuming your AuthService handles the registration process
    if (this.authService.register(this.user)) {
      // Redirect to the profile page after successful signup
      // Store the user data in localStorage
<<<<<<< HEAD
=======
      this.saveUserToLocalStorage(this.user);
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5

      this.router.navigate(['/profile', this.user.username, this.user.id]);
    } else {
      // Display an error message
      alert(
        'Username is already in use or invalid email/password. Please try again.'
      );
    }
  }
<<<<<<< HEAD
=======

  // Function to save user data to localStorage
  private saveUserToLocalStorage(user: any): void {
    // Retrieve existing users from localStorage
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON
      ? JSON.parse(existingUsersJSON)
      : [];

    // Add the new user to the list of existing users
    existingUsers.push(user);

    // Save the updated list of users back to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  }
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5
}
