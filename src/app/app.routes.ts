import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { NotFundComponent } from './not-fund/not-fund.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent, 
        canActivate : [authGuard]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: NotFundComponent}
];
