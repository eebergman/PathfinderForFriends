export enum Rarity {
  'Common' = 'Common',
  'Uncommon' = 'Uncommon',
  'Rare' = 'Rare',
  'RarityEnumError' = 'RarityEnumError'
}

export function sortRarities(input: string): Rarity {
  let retVal = Rarity.RarityEnumError;

  switch (input.toLowerCase()) {
    case 'common':
      retVal = Rarity.Common;
      break;
    case 'uncommon':
      retVal = Rarity.Uncommon;
      break;
    case 'rare':
      retVal = Rarity.Rare;
      break;
    default:
      break;
  }

  return retVal;
}
