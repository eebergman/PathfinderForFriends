import { Injectable } from '@angular/core';

import { Ancestry, AncestryData, Boosts, Items, Traits } from '../models/ancestry';

@Injectable({
  providedIn: 'root'
})
export class DataTranslationHelperService {
  public static ancestryAdapter(response: any[]): Ancestry[] {
    const adaptedAncestries: Ancestry[] = [];
    response.forEach(element => {
      if (element.name !== '[Empty Ancestry]') {
        const ancestry: Ancestry = {
          id: element._id,
          data: this.adaptAncestryData(element.data),
          effects: element.effects,
          name: element.name,
          type: element.type
        };
        adaptedAncestries.push(ancestry);
      }
    });
    return adaptedAncestries;
  }

  private static adaptAncestryData(data: any): AncestryData {
    const ancestryData: AncestryData = {
    };
    return ancestryData;
  }
}
