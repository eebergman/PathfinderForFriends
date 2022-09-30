import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AncestryStoreService {
  private readonly _ancestries = new BehaviorSubject<[]>([]);

  public ancestries$ = this._ancestries.asObservable();

  public get ancestries(): any {
    return this._ancestries;
  }

  public set ancestries(value: any) {
    this._ancestries.next(value);
  }
}
