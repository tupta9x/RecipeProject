import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { NgModule } from "@angular/core";
import { AlertComponemt } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';

@NgModule({
    declarations: [
        AlertComponemt,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AlertComponemt,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ],
    // the entryComponents here is important  for components you create in code
    // this allow Angular to be aware of this component when it needs to create it programmatically
    entryComponents: [
        AlertComponemt
    ],
    providers: [
        LoggingService
    ]
})
export class SharedModule { }