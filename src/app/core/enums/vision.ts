export enum Vision {
  'Normal' = 'Normal Vision',
  'Low' = 'Low Light Vision',
  'Dark' = 'Darkvision',
  'VisionEnumError' = 'VisionEnumError'
}

export function sortVision(input: string): Vision {
  let retVal = Vision.VisionEnumError;

  switch (input.toLowerCase()) {
    case 'common':
      retVal = Vision.Normal;
      break;
    case 'uncommon':
      retVal = Vision.Low;
      break;
    case 'rare':
      retVal = Vision.Dark;
      break;
    default:
      break;
  }

  return retVal;
}
