import { Component, OnInit } from '@angular/core';
import { newsFake, dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Correction: styleUrl -> styleUrls
})
export class HomeComponent implements OnInit {
  news = newsFake;
  films = dataFake;

  constructor() { }

  ngOnInit(): void { }
}
