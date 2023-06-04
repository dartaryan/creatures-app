import { Component, Input } from '@angular/core';
import { Creature, CreatureFamily, CreatureState } from '../creature.interface';

@Component({
  selector: 'app-creature-card',
  templateUrl: './creature-card.component.html',
  styleUrls: ['./creature-card.component.scss'],
})
export class CreatureCardComponent {
  @Input() creature: Creature = {
    id: 0,
    name: '',
    family: CreatureFamily.fire,
    strength: 0,
    state: CreatureState.adopt,
  };
}
