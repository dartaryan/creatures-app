import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreaturesService } from 'src/app/services/creatures.service';
import { Creature } from '../creature.interface';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss'],
})
export class CreatureListComponent implements OnInit {
  creatures$: Observable<Creature[]> = new Observable();

  constructor(private creaturesService: CreaturesService) {}

  ngOnInit(): void {
    this.creatures$ = this.creaturesService.getCreatures();
  }
}
