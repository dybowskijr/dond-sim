import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../case';

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.css']
})
export class BoardTileComponent implements OnInit {

  constructor() { }

  @Input() case: Case;

  formatter: Intl.NumberFormat = 
    new Intl.NumberFormat('us', { style: 'currency', currency: 'USD' });

  ngOnInit(): void {
  }

  displayValue(): string {
    return this.formatter.format(this.case.value);
  }

  click1(): void {
    this.case.toggle();
  }

}
