import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputDataComponentComponent } from "./input-data-component.component";
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        FormsModule, MatInputModule
    ],
    declarations: [InputDataComponentComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [InputDataComponentComponent]
})
export class InputDataModule{}