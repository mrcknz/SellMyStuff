import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YourAddressComponent } from './your-address/your-address.component';
import { YourComponent } from './your/your.component';
import { ConfigService } from './config.service';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    YourAddressComponent,
    YourComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpHeaders
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
