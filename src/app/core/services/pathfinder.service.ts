import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

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
    })
  }

  public getAncestries() {
    this.httpClient.get<any>(`${this.baseUrl}/ancestry`, { headers: this.headers }).subscribe(data => {console.log(data)})
  }
}

