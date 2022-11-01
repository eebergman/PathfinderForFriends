export enum PfTags {
  // A
  // B
  // C
  // D
  'Dwarf' = 'Dwarf',
  // E
  // F
  // G
  // H
  'Humanoid' = 'Humanoid',
  // I
  // J
  // K
  // L
  // M
  // N
  // O
  // P
  // Q
  // R
  // S
  // T
  // U
  // V
  // W
  // X
  // Y
  // Z
  'PfTagsEnumError' = 'PfTagsEnumError'
}

export function sortPfTags(input: string): PfTags {
  let retVal = PfTags.PfTagsEnumError;

  switch (input.toLowerCase()) {
    case 'dwarf':
      retVal = PfTags.Dwarf;
      break;
    case 'humanoid':
      retVal = PfTags.Humanoid;
      break;
    default:
      break;
  }

  return retVal;
}
