import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { ProjectComponent } from './components/project/project.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ButtonComponent } from './components/button/button.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TagComponent } from './components/tag/tag.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    KnowledgeComponent,
    TitleSectionComponent,
    ProjectComponent,
    CardProjectComponent,
    ButtonComponent,
    TooltipComponent,
    TagComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
