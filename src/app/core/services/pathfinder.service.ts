import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class PathfinderService {
  private config: Configuration | undefined;
  private headers: HttpHeaders = new HttpHeaders();

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getAncestries() {
    console.log(this.config);

    this.httpClient
      .get<any>(),
      { headers: this.headers }
  }
}


// .subscribe(config => this._config = {
//   pftApiUrl: config.pftApiUrl,
//   pftAuth: config.pftAuth
// })
