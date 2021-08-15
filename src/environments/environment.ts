// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  feedApiHost: 'http://a3f0ff0578b0644d2a8479f219e0ee11-1241788729.us-east-2.elb.amazonaws.com:8000/api/v0',
  usersApiHost: 'http://a3f0ff0578b0644d2a8479f219e0ee11-1241788729.us-east-2.elb.amazonaws.com:8000/api/v0'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
