// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.github.com/users/eugeneznm?access_token=aad4aef7cf6f937d79bc8dbef820c8eb33aae6ae',
  repoUrl: 'https://api.github.com/users/eugeneznm/repos?access_token=aad4aef7cf6f937d79bc8dbef820c8eb33aae6ae',
  searchUrl: 'https://api.github.com/search/users?q='
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
