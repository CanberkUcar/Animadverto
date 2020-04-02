import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss']
})
export class EntryViewComponent implements OnInit {

  categories: any[]; // Dummy object.
  entries: any[]; // Dummy object.

  constructor(private entryService: EntryService, private route: ActivatedRoute, private router: Router) { }

/** ON ROUTE PARAMATERS: -----------------------------------------------------------------------------------
 * Method subscribed to the observer. When clicked on category
 * observer get an updated category id responsively. 
 * Then: Loads the Entries.
 */
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);

        this.entryService.getEntries(params.categoryId).subscribe((entries: any[]) => {
          this.entries = entries;
        })
      }
    )

      this.entryService.getCategories().subscribe((categories: any[]) => {
        this.categories = categories;
      })

  }


}
