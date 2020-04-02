/* This is the main routing file. With new components, update here. */

///  How to define routes on Angular: ---------------------------------------
// Create an object. 
// Set the path, test it with root path firstly.
// Add the component by importing it. ---------------------------------------


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Imported Components. -----------------------------------------------------
import { EntryViewComponent } from './pages/entry-view/entry-view.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';


// Routes. ------------------------------------------------------------------
const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'categories', component:EntryViewComponent },
  { path: 'categories/:categoryId', component:EntryViewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }