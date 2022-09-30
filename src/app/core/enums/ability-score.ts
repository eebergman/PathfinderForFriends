export enum AbilityScore {
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma',
  'AbilityScoreError'
}

export function sortAbilityScores(input: string): AbilityScore {
  let retVal = AbilityScore.AbilityScoreError;

  switch (input.toLowerCase()) {
    case 'charisma':
    case 'cha':
      retVal = AbilityScore.Charisma;
      break;
    case 'constitution':
    case 'con':
      retVal = AbilityScore.Constitution;
      break;
    case 'dexterity':
    case 'dex':
      retVal = AbilityScore.Dexterity;
      break;
    case 'intelligence':
    case 'int':
      retVal = AbilityScore.Intelligence;
      break;
    case 'strength':
    case 'str':
      retVal = AbilityScore.Strength;
      break;
    case 'wisdom':
    case 'wis':
      retVal = AbilityScore.Wisdom;
      break;
    default:
      break;
  }
  return retVal;
}
