// import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

import {
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatStepperModule,
  MatAutocompleteModule
} from '@angular/material';

import { Ng2CloudinaryModule } from 'ng2-cloudinary';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { AdsListItemComponent } from './ads-list-item/ads-list-item.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { Cloudinary, CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfig from './cloudinary.config';
import * as cloudinary from 'cloudinary-core';

const appRoutes: Routes = [
  { path: '', component: AdsListComponent },
  { path: 'newad', component: CreateAdComponent },
  { path: 'details/:date', component: DetailViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    YourAddressComponent,
    YourComponent,
    QuoteComponent,
    NavbarComponent,
    CreateAdComponent,
    DetailViewComponent,
    AdsListComponent,
    AdsListItemComponent,
    PictureUploadComponent
    // FileSelectDirective
  ],
  imports: [
    // MaterializeModule,
    FileUploadModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatStepperModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CloudinaryModule,
    HttpClientModule,
    NgMatSearchBarModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }
    ),
    ReactiveFormsModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfig),
    FileUploadModule
    // HttpHeaders
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
