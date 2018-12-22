import { Injectable } from '@angular/core';
import {Inventory} from './inventory/inventory.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';
import { SSOService } from './oauth2/sso/sso.service';

@Injectable()
export class AppService {

   constructor(private _router: Router, private _http: HttpClient,
    private ssoService: SSOService) {
      
    }

  
}
