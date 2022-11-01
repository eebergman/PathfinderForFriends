import { Injectable } from '@angular/core';
import { sortLanguages } from '../enums/language';
import { sortSizes } from '../enums/size';
import { sortSourceBooks } from '../enums/sourcebook';
import { sortVision } from '../enums/vision';

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
          additionalLanguages: sortLanguages(element.data.languages.value),
          boosts: new Boosts,
          description: element.data.description.value,
          flaws: [],
          hp: element.data.hp,
          items: new Items,
          languages: sortLanguages(element.data.languages.value),
          reach: element.data.reach,
          rules: element.data.rules,
          size: sortSizes(element.data.size),
          source: sortSourceBooks(element.data.source.value),
          speed: element.data.speed,
          traits: new Traits,
          vision: sortVision(element.data.vision),
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
