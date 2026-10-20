import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AppUser, Role } from '../models/app.models';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'labo-front-user';
  private currentUserSubject = new BehaviorSubject<AppUser | null>(this.loadStoredUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private userService: UserService, private router: Router) {}

  login(email: string, motDePasse: string): Observable<{ token: string; user: AppUser }> {
    const user = this.userService.snapshot().find((item) => item.email.toLowerCase() === email.toLowerCase() && item.motDePasse === motDePasse);
    if (!user) { return throwError(() => new Error('Email ou mot de passe incorrect.')); }
    this.setSession(user);
    return of({ token: 'mock-jwt-token', user });
  }

  register(payload: Omit<AppUser, 'id'>): Observable<AppUser> {
    const existing = this.userService.snapshot().some((item) => item.email.toLowerCase() === payload.email.toLowerCase());
    if (existing) { return throwError(() => new Error('Cet email existe deja.')); }
    return new Observable((observer) => {
      this.userService.create(payload).subscribe((user) => {
        this.setSession(user);
        observer.next(user);
        observer.complete();
      });
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    if (typeof localStorage !== 'undefined') { localStorage.removeItem(this.storageKey); }
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean { return !!this.currentUserSubject.value; }
  currentUser(): AppUser | null { return this.currentUserSubject.value; }
  currentRole(): Role | null { return this.currentUserSubject.value?.role ?? null; }
  redirectAfterLogin(): void { this.router.navigate(['/app/dashboard']); }

  private setSession(user: AppUser): void {
    this.currentUserSubject.next(user);
    if (typeof localStorage !== 'undefined') { localStorage.setItem(this.storageKey, JSON.stringify(user)); }
  }

  private loadStoredUser(): AppUser | null {
    if (typeof localStorage === 'undefined') { return null; }
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) as AppUser : null;
  }
}
