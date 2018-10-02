import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { SSOService } from './oauth2/sso/sso.service';
import { InventoryService } from './inventory/inventory.service';


const routes = [{ path: '', component: HomeComponent },
                { path: 'callback', component: HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(routes),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ SSOService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
