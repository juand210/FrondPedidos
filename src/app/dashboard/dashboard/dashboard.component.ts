import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../../api-auth/api-auth.service'; // Importa el servicio

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router, private apiAuthService:ApiAuthService) {}


  ngOnInit(): void {
    this.apiAuthService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }
  
  logout() {
    // Lógica para cerrar sesión (ejemplo: eliminar token, limpiar storage)
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
  }
}
