import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
        canActivate:[AuthenticationGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full'
    },
    {
        path: 'people',
        loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),
        canActivate:[AuthenticationGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}