export enum Language {
  // A
  // B
  // C
  'Common' = 'Common',
  // D
  'Draconic' = 'Draconic',
  // E
  'Elven' = 'Elven',
  // F
  // G
  'Gnoll' = 'Gnoll',
  // H
  // I
  'Iruxi' = 'Iruxi',
  // J
  // K
  // L
  // M
  // N
  // O
  'Orcish' = 'Orcish',
  // P
  // Q
  // R
  // S
  'Sylvan' = 'Sylvan',
  // T
  // U
  // V
  // W
  // X
  // Y
  // Z
  'LanguageEnumError' = 'LanguageEnumError'
}

export function sortLanguages(input: string[]): Language[] {
  const retVal: Language[] = [];

  input.forEach(lang => {
    let value = Language.LanguageEnumError;
    switch (lang.toLowerCase()) {
      case 'draconic':
        value = Language.Draconic;
        break;
      case 'elven':
        value = Language.Elven;
        break;
      case 'gnoll':
        value = Language.Gnoll;
        break;
      case 'iruxi':
        value = Language.Iruxi;
        break;
      case 'orcish':
        value = Language.Orcish;
        break;
      case 'sylvan':
        value = Language.Sylvan;
        break;
      case 'common':
        value = Language.Common;
        break;
      default:
        break;
    }
  });

  return retVal;
}
