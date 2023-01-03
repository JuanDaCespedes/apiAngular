import { UserComponent } from './user.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserRouteModule } from './user.route';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCreateComponent } from './user-create.component';


@NgModule({
    imports: [UserRouteModule, SharedModule],
    declarations: [UserComponent, UserCreateComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule{}