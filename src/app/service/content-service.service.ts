import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marvel } from './../model/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentServiceService {
  private marvelContent: Marvel | any;
  private constructor(private http: HttpClient) {}

  getContentById(contentId: string): Observable<Marvel> {
    this.marvelContent = this.http.get<Marvel>(
      `http://localhost:8080/marvel/${contentId}`
    );
    return this.marvelContent;
  }
}
