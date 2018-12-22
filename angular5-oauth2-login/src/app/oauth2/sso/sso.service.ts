import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../oauth2.config';
import { Observable } from 'rxjs';
import { Inventory } from '../../inventory/inventory.service';

@Injectable()
export class SSOService {

  constructor(private oauthService: OAuthService) { 
    this.configureOauthService();
  }

  private configureOauthService() {

    this.oauthService.configure(authConfig);
    /** enable below validation only if jwks object is defined as part of oauthconfig obj */
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(sessionStorage);

    /** commented below because below resource is protected by some identity server ex: wso2 */
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.tryLogin({});
  }

  public obtainAccessToken() {
    this.oauthService.initImplicitFlow();
  }

  public getUserName(): string {

    const accessToken = this.getAccessToken();
    const claims = this.getUserClaims();
    console.log('access token ',accessToken);
    this.getUserInfo();
    return claims['sub'].split('@')[0];

  }

  public getUserInfo(): string {
    const idToken =  this.oauthService.getIdToken();
    console.log('id token ',idToken);
    return typeof idToken['sub'] !== 'undefined' ? idToken['sub'].toString() : '';
  }

  public getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  public getUserClaims(): object {
    return this.oauthService.getIdentityClaims();
  }



  public isLoggedIn(): boolean {
    if (this.oauthService.getAccessToken() === null) {
      return false;
    }
    return true;
  }

  public logout(): void {
      this.oauthService.logOut();
      location.reload();
  }


}
