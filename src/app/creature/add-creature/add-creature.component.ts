import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-creature',
  templateUrl: './add-creature.component.html',
  styleUrls: ['./add-creature.component.scss'],
})
export class AddCreatureComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBackClicked(): void {
    this.router.navigate(['/']);
  }
}
