// Load essential modules to properly run the page

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AppRoutes } from './app-routing.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [AppRoutes]);
