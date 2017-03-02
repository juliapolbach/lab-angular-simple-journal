import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class JournalEntriesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getRandom() {
   return this.http.get(`${this.BASE_URL}/api/journal-entries`)
     .map((res) => res.json());
 }

 getEntry(id) {
   return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
     .map((res) => res.json());
 }

}
