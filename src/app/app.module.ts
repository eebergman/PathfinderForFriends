import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PathfinderService } from './core/services/pathfinder.service';
import { LayoutComponent } from './core/components/layout/layout.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './core/components/home/home.component';
import { AncestryComponent } from './features/ancestry/ancestry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LayoutComponent,
    HomeComponent,
    AncestryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [PathfinderService],
  bootstrap: [AppComponent],

})
export class AppModule { }
