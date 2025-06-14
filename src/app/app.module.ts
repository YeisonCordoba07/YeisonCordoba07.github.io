import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { InfoComponent } from './components/templates/info/info.component';
import { KnowledgeComponent } from './components/templates/knowledge/knowledge.component';
import { TitleSectionComponent } from './components/atoms/title-section/title-section.component';
import { ProjectComponent } from './components/templates/project/project.component';
import { CardProjectComponent } from './components/organisms/card-project/card-project.component';

import { TooltipComponent } from './components/atoms/tooltip/tooltip.component';
import { TagComponent } from './components/atoms/tag/tag.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './components/templates/footer/footer.component';
import {ButtonComponent} from "./components/atoms/button/button.component";

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
