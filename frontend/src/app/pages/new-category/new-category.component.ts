import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service'

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  constructor(private entryService: EntryService ){}

  ngOnInit(): void {
  }

  createCategory(title: string) {
    return this.entryService.createCategory(title).subscribe((response: any) => {
    console.log(response);
    // Redirecting user to /category/response._id
  });
}


}
