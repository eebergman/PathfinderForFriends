export enum Size {
  'Tiny' = 'Tiny',
  'Small' = 'Small',
  'Medium' = 'Medium',
  'Large' = 'Large',
  'Huge' = 'Huge',
  'Gargantuan' = 'Gargantuan',
  'SizeEnumError' = 'SizeEnumError',
}

export function sortRarities(input: string): Size {
  let retVal = Size.SizeEnumError;

  switch (input.toLowerCase()) {
    case 'tiny':
      retVal = Size.Tiny;
      break;
    case 'small':
    case 'sm':
      retVal = Size.Small;
      break;
    case 'medium':
    case 'med':
      retVal = Size.Medium;
      break;
    default:
      break;
  }

  return retVal;
}
