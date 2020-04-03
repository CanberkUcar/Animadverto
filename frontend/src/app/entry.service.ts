import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

/* MODEL IMPORT */
import { Entry } from '../../../api/db/models'

@Injectable({
  providedIn: 'root'
})

/* ENTRYSERVICE CLASS (MANUAL) --------------------------- */
export class EntryService {

  // COTR. -------------------------------------------------
  constructor(private webReqService: WebRequestService) { }

/* ANCHOR MANUAL METHODS. -------------------------------- */
  
  createCategory(title: string) { 
    // Sending a web request to create a list.
    // Outsourcing to a another service. 
    return this.webReqService.post('categories', { title });
  }

  getCategories(){
    // Getting categories list. Just as in Postman.
    return this.webReqService.get('categories');
  }

  getEntries(categoryId: string) {
    // Getting Entries list. Like as in Postman.
    // Param _> categoryId.
    return this.webReqService.get(`categories/${categoryId}/entries`);
  }

  /* END OF MANUAL METHODS ------------------------------- */
}