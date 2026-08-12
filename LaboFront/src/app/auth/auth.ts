import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
  standalone: false,
})
export class Auth {

  email = '';
  motDePasse = '';
  message = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.motDePasse).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.message = 'Connexion réussie !';
        console.log(res);
      },
      error: () => {
        this.message = 'Email ou mot de passe incorrect.';
      },
    });
  }
}
