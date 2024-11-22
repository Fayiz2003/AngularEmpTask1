import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Inject the Router service for navigation
  constructor(private router: Router) {}

  onLogin() {
    // Hardcoded username and password for demonstration
    const validUsername = 'touchworld';
    const validPassword = 'touchworldTech';

    if (!this.username && !this.password) {
      alert("Please fill the form completely!")
    }

    if (this.username === validUsername && this.password === validPassword) {
      // Redirect to the employee listing page
      this.router.navigateByUrl('/employee')
    } else {
      // Show an error message if credentials are incorrect
      alert("Invalid username or password!")
    }
  }
}



