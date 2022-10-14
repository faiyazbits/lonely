import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionComponent } from './components/description/description.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    DescriptionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
