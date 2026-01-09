import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
    selector: 'app-filmografia',
    templateUrl: './filmografia.component.html',
    styleUrls: ['./filmografia.component.css']
})
export class FilmografiaComponent implements OnInit {

    films = dataFake;

    constructor() { }

    ngOnInit(): void {
    }

}
