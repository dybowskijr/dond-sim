import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../case';

@Component({
  selector: 'app-case-stage',
  templateUrl: './case-stage.component.html',
  styleUrls: ['./case-stage.component.css']
})
export class CaseStageComponent implements OnInit {

  @Input() cases: Case[];
  constructor() { }

  ngOnInit(): void {
  }

  

}
