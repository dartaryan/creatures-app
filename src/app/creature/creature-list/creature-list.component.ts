import { Component, OnInit } from '@angular/core';
import { CreaturesService } from 'src/app/services/creatures.service';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss'],
})
export class CreatureListComponent implements OnInit {
  creatures: any;

  constructor(private creaturesService: CreaturesService) {}

  ngOnInit(): void {
    this.creaturesService.getCreatures().subscribe(
      (data) => {
        this.creatures = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
