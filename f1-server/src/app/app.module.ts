import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { RestService } from './services/rest-service/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { DriverService } from './services/driver-service/driver.service';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    DriverDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestService, DriverService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
