import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/dashboard/dashboard.component').then((m)=> m.DashboardComponent)
        },
    },
    {
        path: "admin",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/admin/admin.component').then((m) => m.AdminComponent);
        },
    }

];
