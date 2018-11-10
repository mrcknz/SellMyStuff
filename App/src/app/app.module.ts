import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { YourAddressComponent } from './your-address/your-address.component';
import { YourComponent } from './your/your.component';
import { ConfigService } from './config.service';
import { QuoteComponent } from './quote/quote.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AdsListComponent } from './ads-list/ads-list.component';

const appRoutes: Routes = [
  {path: '', component: AdsListComponent},
  {path: 'newad', component: CreateAdComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    YourAddressComponent,
    YourComponent,
    QuoteComponent,
    NavbarComponent,
    CreateAdComponent,
    DetailViewComponent,
    AdsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    ReactiveFormsModule
    // HttpHeaders
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
