import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ModuleModule } from '../angular-module/module/module.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, ModuleModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private service : AuthService, private router : Router, private route : ActivatedRoute) {}

  irEjercicio3() {
    this.router.navigate(["ejercicio3"], {relativeTo : this.route});
  }

  irEjercicio2() {
    this.router.navigate(["ejercicio2"], {relativeTo : this.route});
  }

  irEjercicio1() {
    this.router.navigate(["ejercicio1"], {relativeTo : this.route});
  }
   
  logout() {
    this.service.logout();
    this.router.navigate(["login"]);
  }   
}
