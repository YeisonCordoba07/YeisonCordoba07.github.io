import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.scss']
})
export class KnowledgeCardComponent implements OnInit {

    @Input() src: string = "";
    @Input() alt: string = "";
    @Input() text: string = "";
    @Input() showText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
