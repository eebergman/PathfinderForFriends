import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Ancestry } from '../models/ancestry';
import { DataTranslationHelperService } from './data-translation-helper.service';

@Injectable({
  providedIn: 'root'
})
export class PathfinderService {
  private baseUrl: string = '';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.headers = new HttpHeaders({
      'Authorization': environment.apiAuth
    });
  }

  public getAncestries(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/ancestry`, { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError<Ancestry[]>('ancestries', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`Failed: at ${operation}. Message: ${error.message}`);
      return of(result as T);
    };
  }
}
