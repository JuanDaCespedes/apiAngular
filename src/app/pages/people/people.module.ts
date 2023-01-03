import { PeopleComponent } from './people.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PeopleRouteModule } from './people.ruote';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleUpdateComponent } from './people-update.component';
import { PeopleViewComponent } from './people-view.component';


@NgModule({
    imports: [PeopleRouteModule, SharedModule],
    declarations: [PeopleComponent, PeopleUpdateComponent, PeopleViewComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PeopleModule {}