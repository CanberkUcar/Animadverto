import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service'

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})

// ANCHOR NEWCATEGORY COMPONENT -------------------------------------------------
export class NewCategoryComponent implements OnInit {

  // COTR.
  constructor(private entryService: EntryService ){}

  ngOnInit(): void {
  }

  // Create Category Method call from FrontEnd.----------------------------------
  createCategory(title: string) {
      return this.entryService.createCategory(title).subscribe((response: any) => {
      console.log(response);
      // NOTE Redirecting user to /category/response._id
    });
  } // END OF Create Category METHOD --------------------------------------------

}
