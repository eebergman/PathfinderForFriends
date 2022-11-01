export enum SourceBook {
  'PCR' = 'Pathfinder Core Rulebook',
  'Uncommon' = 'Uncommon',
  'Rare' = 'Rare',
  'SourceBookEnumError' = 'SourceBookEnumError'
}

export function sortSourceBooks(input: string): SourceBook {
  let retVal = SourceBook.SourceBookEnumError;

  switch (input.toLowerCase()) {
    case 'Pathfinder Core Rulebook':
    case 'pcr':
      retVal = SourceBook.PCR;
      break;
    case 'Pathfinder Core Rulebook':
    case 'pcr':
      retVal = SourceBook.Uncommon;
      break;
    case 'Pathfinder Core Rulebook':
    case 'pcr':
      retVal = SourceBook.Rare;
      break;
    default:
      break;
  }

  return retVal;
}
