import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service'
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.module';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})

// ANCHOR NEWCATEGORY COMPONENT -------------------------------------------------
export class NewCategoryComponent implements OnInit {

  // COTR.
  constructor(private entryService: EntryService , private router: Router){ }

  ngOnInit(): void {
  } 

  // Create Category Method call from FrontEnd.----------------------------------
  createCategory(title: string) {
      return this.entryService.createCategory(title).subscribe((category: Category) => {
      console.log(category);
      // NOTE Redirecting user to /category/category._id
      this.router.navigate([ '/categories' , category._id ]);
    });
  } // END OF Create Category METHOD --------------------------------------------

}
