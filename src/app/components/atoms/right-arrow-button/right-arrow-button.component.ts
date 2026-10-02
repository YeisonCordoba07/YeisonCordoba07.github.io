import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-right-arrow-button',
  templateUrl: './right-arrow-button.component.html',
  styleUrls: ['./right-arrow-button.component.scss']
})
export class RightArrowButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

    handleClick() {
        this.onClick.emit();
    }
}
