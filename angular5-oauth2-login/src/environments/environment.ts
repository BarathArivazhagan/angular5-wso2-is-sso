// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  sso: {
    clientId : 'WefVTffSCW8ss_gNLoagJ5CN6oAa',
    serverUrl: 'https://localhost:9443',
    issuer :  '/oauth2/token',
    redirectUri : window.location.origin + '/callback',
    scope: 'openid profile',
    tokenEndpoint:  '/oauth2/token',
    userinfoEndpoint:  '/oauth2/userinfo',
    authorizationEndpoint:  '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
   
  }
};
