import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL; // ROOT VARIABLE. ---------------------------------------------

  
  // COTR. -------------------------------------------------------------------------
  constructor(private http: HttpClient) { this.ROOT_URL = 'http://localhost:3000'; }


  /* ANCHOR REQUEST METHODS. ---------------------------------------------------- */
  get(uri: string) { // GET ROUTE CONNECTION ---------------------------------------
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) { // POST ROUTE CONNECTION --------------------
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) { // PATCH ROUTE CONNECTION ------------------
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) { // DELETE ROUTE CONNECTION ---------------------------------
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
  /* END OF REQUEST METHODS ----------------------------------------------------- */

}
