import { Pipe, PipeTransform } from '@angular/core';
import { Creature } from 'src/app/creature/creature.interface';

@Pipe({
  name: 'randomizeCreatures',
})
export class RandomizeCreaturesPipe implements PipeTransform {
  transform(array: Creature[]): Creature[] {
    if (array.length === 0) {
      return array;
    } else {
      let m = array.length,
        i;
      while (m) {
        i = (Math.random() * m--) >>> 0;
        [array[m], array[i]] = [array[i], array[m]];
      }
      return array;
    }
  }
}
