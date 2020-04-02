import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryViewComponent } from './pages/entry-view/entry-view.component';

import { HttpClientModule } from '@angular/common/http'; // Importing Http Client

@NgModule({
  declarations: [
    AppComponent,
    EntryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
