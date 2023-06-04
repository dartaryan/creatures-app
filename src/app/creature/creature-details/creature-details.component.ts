import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creature-details',
  templateUrl: './creature-details.component.html',
  styleUrls: ['./creature-details.component.scss'],
})
export class CreatureDetailsComponent implements OnInit {
  public creatureId: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.creatureId = this.route.snapshot.params['id'];
  }
}
