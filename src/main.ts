import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import {NgModule} from '@angular/core';
//import { AppModule } from './app/app.module';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));