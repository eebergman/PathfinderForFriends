import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathfinderService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getAncestries() {

    this.httpClient
      .get<any>(),
      { headers: this.headers }
  }
}


// .subscribe(config => this._config = {
//   pftApiUrl: config.pftApiUrl,
//   pftAuth: config.pftAuth
// })
