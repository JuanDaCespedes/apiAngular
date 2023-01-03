import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
    imports: [LoginRouteModule, SharedModule],
    declarations: [LoginComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}