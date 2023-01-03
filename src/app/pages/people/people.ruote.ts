import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { NgModule } from '@angular/core';


const PeopleRoute: Routes = [
    {
        path: '',
        component: PeopleComponent,
        data: {
            pageTitle: 'Bienvenido'
        }
    }
]
@NgModule({
    imports: [RouterModule.forChild(PeopleRoute)],
    exports: [RouterModule]
})
export class PeopleRouteModule {}