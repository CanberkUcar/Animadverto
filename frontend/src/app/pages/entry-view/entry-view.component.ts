import { Component, OnInit } from '@angular/core';

import { EntryService } from 'src/app/entry.service'; /* MANUAL ENTRY SERVICE IMPORT */
import { ActivatedRoute, Params, Router } from '@angular/router'; /* ROUTE IMPORT */

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss']
})

// ANCHOR MAIN COMPONENT -----------------------------------------------------------------------------------
export class EntryViewComponent implements OnInit {

  // VARIABLES.
  categories: any[]; // Dummy object.
  entries: any[]; // Dummy object.

  // COTR.
  constructor(private entryService: EntryService, private route: ActivatedRoute, private router: Router) { }

/** ON ROUTE PARAMATERS: -----------------------------------------------------------------------------------
 * NOTE 
 * Method subscribed to the observer. When clicked on category
 * observer get an updated category id responsively. 
 * Then: Loads the Entries. */
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        // console.log(params); // REVIEW: Testing.

        // Entries input handling through params from EntryService. --------------------
        this.entryService.getEntries(params.categoryId).subscribe((entries: any[]) => {
          this.entries = entries;
        })
      }
    );

    // Categories handling through params from EntryService. ---------------------------
    this.entryService.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
    });

  } // END OF ngOnInit METHOD ----------------------------------------------------------

}
