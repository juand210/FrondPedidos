import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private baseUrl = 'http://localhost:8000/api/AuthUser'; // Cambia esta URL si es necesario

  constructor(private http: HttpClient) {}

  // Método para autenticar al usuario
  authenticate(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData); // Envía el JSON con los datos del usuario


  
  }
}



