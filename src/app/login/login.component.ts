import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para *ngIf y otras directivas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: any = { submitted: false, controls: {} }; // Iniciar controles vacíos si no usas reactive forms

  onSubmit(form: NgForm): void {
    // Ahora puedes trabajar con el formulario 'form'
    console.log(form);
    if (form.valid) {
      console.log('Formulario enviado:', { email: this.email, password: this.password });
    } else {
      console.log('Formulario no válido');
    }
  }
  
}
