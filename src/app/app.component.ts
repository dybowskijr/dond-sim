import { Component, Injector, OnInit } from '@angular/core';
import { Case } from './case';
import { CaseService } from './case.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  caseService: CaseService;
  cases: Case[];

  constructor() {
    const injector: Injector = Injector.create({providers: [{provide: CaseService, deps: []}]});
    this.caseService = injector.get(CaseService);
   }

   ngOnInit(): void {
     this.cases = this.caseService.getCases();
   }



}
