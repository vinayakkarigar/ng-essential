import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductStatusComponent } from './product-status/product-status.component';
import { ChildComponent } from './child/child.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ChangeColorDirective } from './change-color.directive';
import { ViewEncaspulationParentComponent } from './view-encaspulation-parent/view-encaspulation-parent.component';
import { ViewEncapsulationChildComponent } from './view-encapsulation-child/view-encapsulation-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductStatusComponent,
    ChildComponent,
    StructuralDirectivesComponent,
    ChangeColorDirective,
    ViewEncaspulationParentComponent,
    ViewEncapsulationChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
