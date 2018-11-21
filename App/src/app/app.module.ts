// import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
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
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { AdsListItemComponent } from './ads-list-item/ads-list-item.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import cloudinaryConfig from './cloudinary.config';
import * as cloudinary from 'cloudinary-core';
import {
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';

const appRoutes: Routes = [
  { path: '', component: AdsListComponent },
  { path: 'newad', component: CreateAdComponent },
  { path: 'search/:searchTerm', component: SearchResultListComponent },
  { path: ':id', component: DetailViewComponent }
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
    PictureUploadComponent,
    SearchComponent,
    SearchResultListComponent
  ],
  imports: [
    FileUploadModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2CloudinaryModule,
    HttpClientModule,
    MatExpansionModule,
    NgMatSearchBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfig),
    FileUploadModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
