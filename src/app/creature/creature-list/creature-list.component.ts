import { Component } from '@angular/core';
import { Creature, CreatureFamily } from '../creature.interface';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss'],
})
export class CreatureListComponent {
  creatures: Creature[] = [
    {
      id: 1,
      name: 'Fluffy',
      family: CreatureFamily.fire,
      strength: 200,
    },
    {
      id: 2,
      name: 'Bubbles',
      family: CreatureFamily.water,
      strength: 500,
    },
    {
      id: 3,
      name: 'Rocky',
      family: CreatureFamily.earth,
      strength: 800,
    },
    {
      id: 4,
      name: 'Zephyr',
      family: CreatureFamily.wind,
      strength: 300,
    },
    {
      id: 5,
      name: 'Sparkle',
      family: CreatureFamily.light,
      strength: 1000,
    },
    {
      id: 6,
      name: 'Midnight',
      family: CreatureFamily.dark,
      strength: 1200,
    },
    {
      id: 7,
      name: 'Ember',
      family: CreatureFamily.fire,
      strength: 150,
    },
    {
      id: 8,
      name: 'Splash',
      family: CreatureFamily.water,
      strength: 700,
    },
    {
      id: 9,
      name: 'Pebble',
      family: CreatureFamily.earth,
      strength: 400,
    },
    {
      id: 10,
      name: 'Zephyrus',
      family: CreatureFamily.wind,
      strength: 900,
    },
  ];
}
