import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 email = '';
  password = '';
  authService = inject(AuthService);
  router = inject(Router);

  login(event: Event) {
    event.preventDefault();
    console.log(`Login: ${this.email} / ${this.password}`);
    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe(() => {
        alert('Login success!');
        this.router.navigate(['/']);
      });
  }
}
