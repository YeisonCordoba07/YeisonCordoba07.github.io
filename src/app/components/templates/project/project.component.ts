import { Component, OnInit } from '@angular/core';
import {
  CORREOS_DESCRIPTION,
  DISNEY_DESCRIPTION,
  EMASON_DESCRIPTION,
  MASTERCLASS_DESCRIPTION, MERCADO_DESCRIPTION,
  UDEAFOOD_DESCRIPTION,
  Project
} from "../../../shared/contants/project.constants";
import {TECHNOLOGY_MAP} from "../../../shared/contants/tag.constants";

import projectsData from "../../../shared/contants/proyectos.json";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    techMapIcon = TECHNOLOGY_MAP;
    projectsList: Project[] = projectsData as Project[];

  constructor() { }

  ngOnInit(): void {
  }


  protected readonly UDEAFOOD_DESCRIPTION = UDEAFOOD_DESCRIPTION;
  protected readonly DISNEY_DESCRIPTION = DISNEY_DESCRIPTION;
  protected readonly EMASON_DESCRIPTION = EMASON_DESCRIPTION;
  protected readonly MASTERCLASS_DESCRIPTION = MASTERCLASS_DESCRIPTION;
  protected readonly CORREOS_DESCRIPTION = CORREOS_DESCRIPTION;
  protected readonly MERCADO_DESCRIPTION = MERCADO_DESCRIPTION;
    protected readonly String = String;
}
