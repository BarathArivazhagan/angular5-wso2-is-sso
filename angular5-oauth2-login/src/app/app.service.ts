import { Injectable } from '@angular/core';
import {Inventory} from './inventory/inventory.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class AppService {

   constructor(
    private _router: Router, private _http: HttpClient, private oauthService: OAuthService) {
        this.oauthService.loginUrl = environment.authorizeEndpoint;
        this.oauthService.redirectUri = environment.redirectUri;
        this.oauthService.clientId = environment.clientId;
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.tryLogin({});
    }

  obtainAccessToken() {
      this.oauthService.initImplicitFlow();
  }

  getResource(resourceUrl): Observable<Inventory> {

    const reqHeaders =  { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                     'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
                    };
    const httpOptions = {
        headers: new HttpHeaders(reqHeaders)
      };
    return this._http.get(resourceUrl, httpOptions)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  isLoggedIn() {
    if (this.oauthService.getAccessToken() === null) {
       return false;
    }
    return true;
  }

  logout() {
      this.oauthService.logOut();
      location.reload();
  }

}
