import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectAddressModalComponent } from './select-address-modal/select-address-modal.component';
import { EditAddressModalComponent } from './edit-address-modal/edit-address-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectAddressModalComponent,
    EditAddressModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
