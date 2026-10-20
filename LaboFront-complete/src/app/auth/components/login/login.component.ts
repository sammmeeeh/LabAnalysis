import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss'], standalone: false })
export class LoginComponent {
  email = 'client@lab.local';
  motDePasse = 'Password123!';
  error = '';
  constructor(private authService: AuthService) {}
  login(): void {
    this.error = '';
    this.authService.login(this.email, this.motDePasse).subscribe({ next: () => this.authService.redirectAfterLogin(), error: (err) => this.error = err.message });
  }
}
