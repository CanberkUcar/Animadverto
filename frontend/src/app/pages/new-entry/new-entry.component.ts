import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/entry.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Entry } from 'src/app/models/entry.module';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})

// ANCHOR NEWENTRY COMPONENT -------------------------------------------------
export class NewEntryComponent implements OnInit {

  // COTR.
  constructor(private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router) { }

  // Property that 
  categoryId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params['categoryId'];
        // console.log(this.categoryId); // REVIEW Testing.
      }
    );
  }

  // Create Entry Method call from FrontEnd.----------------------------------
  createEntry(title:string){
    this.entryService.createEntry(title, this.categoryId).subscribe((newEntry: Entry) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
