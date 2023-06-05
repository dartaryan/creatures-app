import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreatureComponent } from './creature/add-creature/add-creature.component';
import { CreatureListComponent } from './creature/creature-list/creature-list.component';
import { CreatureDetailsComponent } from './creature/creature-details/creature-details.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CreatureListComponent, pathMatch: 'full' },
  { path: 'add-creature', component: AddCreatureComponent, pathMatch: 'full' },
  {
    path: 'exchange-creature',
    component: CreatureListComponent,
    pathMatch: 'full',
  },
  {
    path: 'adopt-creature',
    component: CreatureListComponent,
    pathMatch: 'full',
  },
  {
    path: 'creature-details/:id',
    component: CreatureDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
