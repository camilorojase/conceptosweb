// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'https://back-museums-grupo36.herokuapp.com/api/';
const apikeyBattuta = '4c97e9d806dcb75debd3ecb17f80976a';
//const baseUrl = 'https://back36g1.herokuapp.com/api/'
export const environment = {
  production: false,
  baseUrl,
  apikeyBattuta
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
