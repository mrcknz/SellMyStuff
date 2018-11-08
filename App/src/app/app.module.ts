import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YourAddressComponent } from './your-address/your-address.component';
import { YourComponent } from './your/your.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    YourAddressComponent,
    YourComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
