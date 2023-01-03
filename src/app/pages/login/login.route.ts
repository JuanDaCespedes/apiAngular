import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const loginRoute: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(loginRoute)],
    exports: [RouterModule]
})
export class LoginRouteModule{}