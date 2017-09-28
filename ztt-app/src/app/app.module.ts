import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
