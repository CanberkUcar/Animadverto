/* This is the main routing file. With new components, update here. */

/** HOW TO DEFINE ROUTES ON ANGULAR: -----------------------------------------------
 * NOTE
 * Create an object.
 * Set the path. Test it with root path firstly.
 * Add the component by importing it.
--------------------------------------------------------------------------------- */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Imported Components. ------------------------------------------------------------
import { EntryViewComponent } from './pages/entry-view/entry-view.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';


// SECTION Routes. -----------------------------------------------------------------
const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'new-category', component: NewCategoryComponent },
  { path: 'categories', component:EntryViewComponent },
  { path: 'categories/:categoryId', component:EntryViewComponent }
];
// END OF ROUTES -------------------------------------------------------------------


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }