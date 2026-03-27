import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

    email: string = '';
    password: string = '';
    errorMessage: string = '';
    isLoading: boolean = false;

    login(){
      this.errorMessage = '';
      this.isLoading = true;

      setTimeout(() => {
       if (this.email === 'ejemplo@ejemplo.com' && this.password === '1234'){
         alert('Inicio de sesion exitoso  ')
       }else {
        this.errorMessage = 'Usuario ocontraseña incorrecto';
       }

        this.isLoading = false;
       }, 1500);

    }
}
