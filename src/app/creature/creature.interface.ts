export interface Creature {
  id: number;
  name: string;
  family: CreatureFamily;
  strength: number;
}

export enum CreatureFamily {
  fire = 'fire',
  water = 'water',
  earth = 'earth',
  wind = 'wind',
  light = 'light',
  dark = 'dark',
}
