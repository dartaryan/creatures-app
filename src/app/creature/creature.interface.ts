export interface Creature {
  id: number;
  name: string;
  family: CreatureFamily;
  strength: number;
  state: CreatureState;
}

export enum CreatureFamily {
  fire = 'fire',
  water = 'water',
  earth = 'earth',
  wind = 'wind',
  light = 'light',
  dark = 'dark',
}

export enum CreatureState {
  adopt = 'adopt',
  exchange = 'exchange',
}
