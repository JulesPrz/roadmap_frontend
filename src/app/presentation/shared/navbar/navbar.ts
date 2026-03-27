import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LogoutUseCase } from '../../../domain/use-cases/logout.use-case';
import { AuthAdapter } from '../../../infrastructure/adapters/auth.adapter';
import { User } from '../../../domain/models/user.model';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  currentUser: User | null = null;

  constructor(
    private LogoutUseCase: LogoutUseCase,
    private authAdapter: AuthAdapter,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authAdapter.getCurrentUser();
  }

  onCreatePlan(): void {
    console.log('Crear plan');
  }

  onCreateCourse(): void {
    this.LogoutUseCase.execute();
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.LogoutUseCase.execute();
    this.router.navigate(['/login']);
  }
}
