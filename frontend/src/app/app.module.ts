import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryViewComponent } from './pages/entry-view/entry-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { NewEntryComponent } from './pages/new-entry/new-entry.component'; // Importing Http Client

@NgModule({
  declarations: [
    AppComponent,
    EntryViewComponent,
    NewCategoryComponent,
    NewEntryComponent
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