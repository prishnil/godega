import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LandingModule } from './modules/landing/landing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { REDUCERS } from './app.reducer';
import {UIService} from './modules/shared/services/ui.service';
import {NavigationModule} from './modules/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    LandingModule,
    NavigationModule,
    StoreModule.forRoot(REDUCERS)
  ],
  providers: [
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
