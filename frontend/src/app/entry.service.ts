import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Entry } from '../../../api/db/models'

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private webReqService: WebRequestService) { }

/**
 * Manual Methods. -----------------------------------------
 * */
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
    return this.webReqService.get(`categories/${categoryId}/entries`);
  }
}
