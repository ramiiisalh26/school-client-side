import { Routes } from '@angular/router';
import { hasRoleGuardService } from './services/has_role_guard/has-role-guard.service';

export const routes: Routes = [
    // {
    //     path: '/',
    //     pathMatch: 'full',
    //     loadComponent: () => {
    //         return import('./components/dashboard/dashboard.component').then((m)=> m.DashboardComponent)
    //     },
    // },
    {
        path: 'dashboard/login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/dashboard/dashboard.component').then((m)=> m.DashboardComponent)
        },
    },
    {
        path: "dashboard/admin",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/admin/admin.component').then((m) => m.AdminComponent);
        },
        // canActivate: [hasRoleGuardService],
        // data: {
        //     role: ['ADMIN']
        // }
    },
    {
        path: "dashboard/teacher",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/teacher/teacher.component').then((m) => m.TeacherComponent);
        },
        // canActivate: [hasRoleGuardService],
        // data: {
        //     role: ['TEACHER']
        // }
    },
    {
        path: "dashboard/student",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/student/student.component').then((m) => m.StudentComponent);
        },
        // canActivate: [hasRoleGuardService],
        // data: {
        //     role: ['STUDENT']
        // }
    },
    {
        path: "list/teachers",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/teachers/teachers.component').then((m) => m.TeachersComponent);
        },
        // canActivate: [hasRoleGuardService],
        // data: {
        //     role: ['TEACHER','ADMIN']
        // }
    },
    {
        path: "details/:id",
        pathMatch: "full",
        loadComponent: () => {
            return import('./components/dashboard/details/details.component').then((m) => m.DetailsComponent);
        },
        // canActivate: [hasRoleGuardService],
        // data: {
        //     role: ['TEACHER','ADMIN']
        // }
    }

];
