import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../core/models/app.models';

@Component({ selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss'], standalone: false })
export class RegisterComponent {
  nom = ''; email = ''; motDePasse = ''; role: Role = 'Client'; error = '';
  roles: Role[] = ['Client', 'Administrator', 'Technician', 'QualityManager', 'NutritionManager'];
  constructor(private authService: AuthService) {}
  register(): void {
    this.error = '';
    this.authService.register({ nom: this.nom, email: this.email, motDePasse: this.motDePasse, role: this.role }).subscribe({ next: () => this.authService.redirectAfterLogin(), error: (err) => this.error = err.message });
  }
}
