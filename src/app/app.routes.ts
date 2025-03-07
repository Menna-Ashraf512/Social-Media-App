import { Routes } from '@angular/router';
import { logUserGuard } from './core/guards/log-user.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {path:'',
        loadComponent:()=>import("./core/layout/auth-layout/auth-layout.component").then(e=>e.AuthLayoutComponent),canActivate:[logUserGuard],children:[
            {path:'',redirectTo:'signIn',pathMatch:'full'},
            {path:'signIn',loadComponent:()=>import("./core/auth/components/sign-in/sign-in.component").then(e=>e.SignInComponent)},
            {path:'signUp',loadComponent:()=>import("./core/auth/components/sign-up/sign-up.component").then(e=>e.SignUpComponent)},
        ]
    },
    {path:'',
        loadComponent:()=>import("./core/layout/main-layout/main-layout.component").then(e=>e.MainLayoutComponent),canActivate:[authGuard],children:[
        {path:'timeLine',loadComponent:()=>import("./core/pages/main/time-line/time-line.component").then(e=>e.TimeLineComponent)},
        // {path:'',loadComponent:()=>import("./core/layout/main-layout/main-layout.component").then(e=>e.MainLayoutComponent)},

        ]
    },

    {path:'**',
        loadComponent:()=>import("./core/pages/main/not-found/not-found.component").then(e=>e.NotFoundComponent)
    }
];
