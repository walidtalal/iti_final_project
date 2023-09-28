import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../services/auth.service';
=======
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
<<<<<<< HEAD

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
=======
  profilePicture: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5

  ngOnInit() {
    // Retrieve username and id from route parameters
    this.route.params.subscribe((params) => {
      const currentUsername = params['username'];
      const userId = params['id'];

      // Retrieve user data from localStorage
      const userData = localStorage.getItem('users');

      if (userData) {
        // Parse the JSON string back to an array of user objects
        const users = JSON.parse(userData);

        // Find the user in the array based on username and id
        this.user = users.find(
          (user: any) =>
            user.username === currentUsername && user.id === Number(userId)
        );

        console.log('user:', this.user);
      }
    });
  }

<<<<<<< HEAD
  // Function to log out the user
  logout() {
    // Call the AuthService to log out
    this.authService.logout();

    // Set a flag in localStorage to indicate that the user has logged out
    localStorage.setItem('isLoggedIn', 'false');
=======
  // Logout method
  logout() {
    // Remove the currently logged-in user's data from localStorage
    if (this.user) {
      const currentUsername = this.user.username;

      // Retrieve user data from localStorage
      const userData = localStorage.getItem('users');

      if (userData) {
        // Parse the JSON string back to an array of user objects
        const users = JSON.parse(userData);

        // Find and remove the currently logged-in user from the array
        const updatedUsers = users.filter(
          (user: any) => user.username !== currentUsername
        );

        // Save the updated user data back to localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
    }
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5

    // Redirect to the login page
    this.router.navigate(['/login']);
  }

  onProfilePictureChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Assuming you save the profile picture in the user object
      this.user.profilePicture = URL.createObjectURL(file);

      // Update the user data in localStorage
      const userData = localStorage.getItem('users');

      if (userData) {
        const users = JSON.parse(userData);

        // Find the user and update the profile picture URL
        const updatedUsers = users.map((u: any) => {
          if (u.username === this.user.username) {
            u.profilePicture = this.user.profilePicture;
          }
          return u;
        });

        // Save the updated user data back to localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
    }
  }
}
