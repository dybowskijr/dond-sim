import { Component, Inject, Injector, Input, OnInit, ReflectiveInjector } from '@angular/core';
import { Case } from '../case';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  caseService: CaseService;
  @Input() cases: Case[];

  constructor() {
    const injector: Injector = Injector.create({providers: [{provide: CaseService, deps: []}]});
    this.caseService = injector.get(CaseService);
   }

  ngOnInit(): void {

  }

  caseCount(status: string): number {
    return this.cases.filter(c => c.status === status).length;

  }
  valueCount(status: string): number {
    return this.cases.filter(c => c.status === status).map(c => c.value).
      reduce((accumulator, currentValue) => accumulator += currentValue, 0);
  }

  valueAverage(status: string): number {
    const count = this.caseCount(status);
    if(count > 0) {
        return this.valueCount(status) / this.caseCount(status);
    }
    return 0;
  }


}
