import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const UserRoute: Routes = [
    {
        path: '',
        component: UserComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(UserRoute)],
    exports: [RouterModule]
})
export class UserRouteModule{}