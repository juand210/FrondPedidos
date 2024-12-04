import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para *ngIf y otras directivas
import { ApiAuthService } from '../api-auth/api-auth.service'; // Importa el servicio
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user_name: string = '';
  password: string = '';
  loginForm: any = { submitted: false, controls: {} }; // Iniciar controles vacíos si no usas reactive forms

  constructor(private apiAuthService: ApiAuthService,
    private router: Router
  ) {}

  // Método para enviar el formulario
  onSubmit(form: NgForm): void {
    console.log(form);
    this.loginForm.submitted = true; // Marca que se ha enviado el formulario
    if (form.valid) {
      // Si el formulario es válido, envía los datos al API
      this.apiAuthService.authenticate({ user_name: this.user_name, password: this.password }).subscribe(
        (response) => {       
          if (response.Result) {  
              this.apiAuthService.setUserName(this.user_name);  // Establecer el nombre de usuario en el servicio    
              this.router.navigate(['/dashboard']); // Redirige al cargar el componente          
          } else {
            alert('Credenciales incorrectas');
          }
          },
          (error) => {
            console.error('Error al autenticarse:', error);
            alert('El usuario no existe');
          }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
