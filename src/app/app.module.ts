import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    KnowledgeComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
