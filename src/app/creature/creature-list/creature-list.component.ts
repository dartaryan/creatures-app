import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { CreaturesService } from 'src/app/services/creatures.service';
import { Creature, CreatureState } from '../creature.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss'],
})
export class CreatureListComponent implements OnInit {
  creatureState: CreatureState = CreatureState.exchange;
  creatures$: Observable<Creature[]> | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private creaturesService: CreaturesService
  ) {}

  ngOnInit(): void {
    this.creatureState = this.activatedRoute.snapshot.url
      .toString()
      .includes('adopt')
      ? CreatureState.adopt
      : CreatureState.exchange;
    console.log(this.activatedRoute.snapshot.url.toString());

    this.creatures$ = this.creaturesService.getCreatures().pipe(
      map((data) => {
        return data.filter((creature: Creature) => {
          return creature.state === this.creatureState;
        });
      })
    );
  }
}
