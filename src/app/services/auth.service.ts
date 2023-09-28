import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // Function to check if the user is authenticated
  isAuthenticated(): boolean {
    // Check if the user data is stored in session storage
    return localStorage.getItem('currentUser') !== null;
  }

  // Function to log in the user
  login(email: string, password: string): boolean {
    // Retrieve user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the provided email and password match any user in localStorage
    const matchedUser = storedUsers.find(
      (user: any) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // Store the user data in session storage
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      return true;
    } else {
      return false;
    }
  }

  // Function to register a new user
  register(user: any): boolean {
    // Retrieve existing users from localStorage
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON
      ? JSON.parse(existingUsersJSON)
      : [];

    // Check if the provided username is already in use
    const isUsernameUnique = !existingUsers.some(
      (existingUser: any) => existingUser.username === user.username
    );

    if (isUsernameUnique) {
      // Add the new user to the list of existing users
      existingUsers.push(user);

      // Save the updated list of users back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      return true;
    } else {
      return false;
    }
  }

  // Function to log out the user
<<<<<<< HEAD
  // Function to log out the user
  logout(): void {
    // Clear the user data and authentication state
    localStorage.removeItem('currentUser');

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
=======
  logout(userId: string): void {
    // Check if the current user matches the provided userId
    const currentUser = this.getCurrentUser();

    if (currentUser && currentUser.userId === userId) {
      // Redirect to the login page
      this.router.navigate(['/login']);
    } else {
      console.error('You can only log out yourself.');
    }
  }

>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5
  // Function to get the currently authenticated user
  getCurrentUser(): any {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }
}
