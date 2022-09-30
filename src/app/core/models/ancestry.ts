import { AbilityScore } from "../enums/ability-score";
import { Language } from "../enums/language";
import { Rarity } from "../enums/rarity";
import { SourceBook } from "../enums/sourcebook";
import { Tags } from "../enums/tags";

export class Boosts {
  FirstBoost: AbilityScore[] = [];
  SecondBoost: AbilityScore[] = [];
  ThirdBoost: AbilityScore[] = [];
}

export class Cfaem {
  id: string = '';
  img: string = '';
  level: number = 0;
  name: string = '';
  pack: string = '';
}

export class Ctbld {
  id: string = '';
  img: string = '';
  level: number = 0;
  name: string = '';
  pack: string = '';
}

export class Items {
  cfaem: Cfaem = new Cfaem();
  ctbld: Ctbld = new Ctbld();
}

export class Traits {
  rarity: Rarity = Rarity.Common;
  tags: Tags[] = [];
}

export class AncestryData {
  additionalLanguages: Language[] = [];
  boosts: Boosts = new Boosts();
  description: string = '';
  flaws: AbilityScore[] = [];
  hp: number = 0;
  items: Items = new Items();
  languages: Language[] = [];
  reach: number = 0;
  rules: any[] = [];
  size: string = '';
  source: SourceBook[] = [];
  speed: number = 25;
  traits: Traits = new Traits();
  vision: string = '';
}

export class Ancestry {
  id: string = '';
  data: AncestryData = new AncestryData();
  effects: string[] = [];
  name: string = '';
  type: string = '';
}
