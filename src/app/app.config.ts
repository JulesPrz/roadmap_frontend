import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AUTH_REPOSITORY } from './domain/repositories/auth.repository.token';
import { AuthAdapter } from './infrastructure/adapters/auth.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: AUTH_REPOSITORY, useClass: AuthAdapter }
  ]
};
