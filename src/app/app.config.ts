import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  RouterLink,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { headerInterceptor } from './core/interceptor/header.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { handelerrorInterceptor } from './core/interceptor/handelerror.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([headerInterceptor, handelerrorInterceptor])
    ),

    provideAnimationsAsync(),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers

    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
