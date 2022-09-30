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

export function sortLanguages(input: string): Language {
  let retVal = Language.LanguageEnumError;

  switch (input.toLowerCase()) {
    case 'draconic':
      retVal = Language.Draconic;
      break;
    case 'elven':
      retVal = Language.Elven;
      break;
    case 'gnoll':
      retVal = Language.Gnoll;
      break;
    case 'iruxi':
      retVal = Language.Iruxi;
      break;
    case 'orcish':
      retVal = Language.Orcish;
      break;
    case 'sylvan':
      retVal = Language.Sylvan;
      break;
    case 'common':
      retVal = Language.Common;
      break;
      // case 'draconic':
      //   retVal = Language.Draconic;
      //   break;
      // case 'draconic':
      //   retVal = Language.Draconic;
      break;
    default:
      break;
  }
  return retVal;
}
