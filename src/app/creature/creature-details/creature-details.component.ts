import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creature-details',
  templateUrl: './creature-details.component.html',
  styleUrls: ['./creature-details.component.scss'],
})
export class CreatureDetailsComponent implements OnInit {
  public creatureId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.creatureId = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => (this.creatureId = params['id']));
  }

  onSelectNext() {
    this.creatureId += 1;
    this.router.navigate(['creature-details', this.creatureId]);
  }
  onSelectPrevious() {
    this.creatureId -= 1;
    this.router.navigate(['creature-details', this.creatureId]);
  }
}
