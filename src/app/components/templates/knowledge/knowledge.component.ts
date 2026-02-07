import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

    showText: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  textToggle(): void{
    this.showText = !this.showText;
  }

}
