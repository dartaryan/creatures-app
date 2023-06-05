import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatureListComponent } from './creature/creature-list/creature-list.component';
import { CreatureCardComponent } from './creature/creature-card/creature-card.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { CreaturesService } from './services/creatures.service';
import { AddCreatureComponent } from './creature/add-creature/add-creature.component';
import { CreatureDetailsComponent } from './creature/creature-details/creature-details.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found.component';
import { RandomizeCreaturesPipe } from './utils/randomize-creatures/randomize-creatures.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatureCardComponent,
    CreatureListComponent,
    NavBarComponent,
    AddCreatureComponent,
    CreatureDetailsComponent,
    PageNotFoundComponent,
    RandomizeCreaturesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CreaturesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
