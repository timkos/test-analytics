import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {getAnalytics, provideAnalytics, ScreenTrackingService} from '@angular/fire/analytics';
import {TestComponent} from './test.component';
import {Test2Component} from './test2.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";

const config = {
  projectId: 'x',
  appId: 'x',
  storageBucket: 'x.appspot.com',
  apiKey: 'x',
  authDomain: 'x.firebaseapp.com',
  messagingSenderId: 'x',
  measurementId: 'x',
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp(config)
    ),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
