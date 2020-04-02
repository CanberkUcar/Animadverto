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


}
