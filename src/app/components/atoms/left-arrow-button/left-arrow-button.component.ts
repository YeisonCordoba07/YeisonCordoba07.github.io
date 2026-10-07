import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-left-arrow-button',
  templateUrl: './left-arrow-button.component.html',
  styleUrls: ['./left-arrow-button.component.scss']
})
export class LeftArrowButtonComponent implements OnInit {
    @Output() onClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

    handleClick() {
        this.onClick.emit();
    }

}
