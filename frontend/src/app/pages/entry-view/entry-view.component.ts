import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service'

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.scss']
})
export class EntryViewComponent implements OnInit {

  constructor(private entryService: EntryService ) { }

  ngOnInit(): void {
  }

  createNewList(){
    return this.entryService.createCategory('Testing').subscribe((response: any) => {
      console.log(response);
    });
  }

}
