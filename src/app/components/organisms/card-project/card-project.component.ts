import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

    @Input() title: string = "";
    @Input() description: string = "";
    @Input() src: string = "";
    @Input() githubLink: string = "";
    @Input() resultLink: string = "";
    @Input() showInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
