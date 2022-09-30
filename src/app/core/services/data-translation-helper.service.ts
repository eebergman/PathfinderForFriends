import { Injectable } from '@angular/core';

import { Ancestry } from '../models/ancestry';

@Injectable({
  providedIn: 'root'
})
export class DataTranslationHelperService {
  public static ancestryAdapter(response: any[]): Ancestry[] {
    const adaptedAncestries: Ancestry[] = [];
    response.forEach(element => {
      if (element.name !== '[Empty Ancestry]') {
        const ancestry: Ancestry = {
          _id: element._id,
          data: element.data,
          effects: element.effects,
          name: element.name,
          type: element.type
        };
        adaptedAncestries.push(ancestry);
      }
    });
    return adaptedAncestries;
  }
}
