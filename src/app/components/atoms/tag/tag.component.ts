import {Component, Input, OnInit} from '@angular/core';
import {TECHNOLOGY_COLORS, TechnologyColor} from "../../../shared/contants/tag.constants";

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
    @Input() src: string = "";
    @Input() tagName: string = "";
    protected readonly technologyColors = TECHNOLOGY_COLORS;

    constructor() {
    }


    ngOnInit(): void {
    }

    get colors(): TechnologyColor {
        return this.technologyColors[this.tagName] ?? {background: '#EEEEEE', text: '#333333',};
    }

}
