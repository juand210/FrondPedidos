import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    // Lógica para cerrar sesión (ejemplo: eliminar token, limpiar storage)
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
  }


}
