import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatureListComponent } from './creature/creature-list/creature-list.component';
import { CreatureCardComponent } from './creature/creature-card/creature-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, CreatureCardComponent, CreatureListComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
