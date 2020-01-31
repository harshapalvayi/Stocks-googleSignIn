import {
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';

export function getAuthServiceConfig() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('807427377963-562hbttj9aeupq1ho0l1t16rfj9j803l.apps.googleusercontent.com')
      },
    ]
);
  return config;
}
