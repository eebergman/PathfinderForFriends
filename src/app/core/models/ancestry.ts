import { AbilityScore } from "../enums/ability-score";
import { Language } from "../enums/language";
import { Rarity } from "../enums/rarity";
import { Size } from "../enums/size";
import { SourceBook } from "../enums/sourcebook";
import { PfTags } from "../enums/tags";
import { Vision } from "../enums/vision";

export class Boosts {
  firstBoost: AbilityScore[] = [];
  secondBoost: AbilityScore[] = [];
  thirdBoost: AbilityScore[] = [];
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
  tags: PfTags[] = [];
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
  size: Size = Size.Medium;
  source: SourceBook = SourceBook.PCR;
  speed: number = 25;
  traits: Traits = new Traits();
  vision: Vision = Vision.Normal;
}

export class Ancestry {
  id: string = '';
  additionalLanguages: Language[] = [];
  boosts: Boosts = new Boosts();
  description: string = '';
  flaws: AbilityScore[] = [];
  hp: number = 0;
  items: Items = new Items();
  languages: Language[] = [];
  reach: number = 0;
  rules: any[] = [];
  size: Size = Size.Medium;
  source: SourceBook = SourceBook.PCR;
  speed: number = 25;
  traits: Traits = new Traits();
  vision: Vision = Vision.Normal;
  effects: string[] = [];
  name: string = '';
  type: string = '';
}
