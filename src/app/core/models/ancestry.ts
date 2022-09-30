export interface AdditionalLanguages {
  count: number;
  custom: string;
  value: string[];
}

export interface FirstBoost {
  value: string[];
}

export interface SecondBoost {
  value: string[];
}

export interface ThirdBoost {
  value: string[];
}

export interface Boosts {
  0: FirstBoost;
  1: SecondBoost;
  2: ThirdBoost;
}

export interface Description {
  value: string;
}

export interface FirstFlaw {
  value: string[];
}

export interface Flaws {
  0: FirstFlaw;
}

export interface Cfaem {
  id: string;
  img: string;
  level: number;
  name: string;
  pack: string;
}

export interface Ctbld {
  id: string;
  img: string;
  level: number;
  name: string;
  pack: string;
}

export interface Items {
  cfaem: Cfaem;
  ctbld: Ctbld;
}

export interface Languages {
  custom: string;
  value: string[];
}

export interface Source {
  value: string;
}

export interface Rarity {
  value: string;
}

export interface Traits {
  custom: string;
  rarity: Rarity;
  value: string[];
}

export interface AncestryData {
  additionalLanguages: AdditionalLanguages;
  boosts: Boosts;
  description: Description;
  flaws: Flaws;
  hp: number;
  items: Items;
  languages: Languages;
  reach: number;
  rules: any[];
  size: string;
  source: Source;
  speed: number;
  traits: Traits;
  vision: string;
}

export class Ancestry {
  _id!: string;
  data!: AncestryData;
  effects!: any[];
  name!: string;
  type!: string;
}
