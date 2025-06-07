import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, HttpLoaderFactory } from './app/app.component';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Import your main routed component
import { MainContentComponent } from './app/main-content/main-content';

// Define your routes
const routes: Routes = [
  { path: '', component: MainContentComponent },
  // Add more routes as needed
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
});