import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}, // Ruta para el dashboard
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login por defecto
    { path: '**', redirectTo: 'login' }, // Ruta de respaldo para no encontrados   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
