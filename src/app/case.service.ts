import { Injectable } from '@angular/core';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})

export class CaseService {

  constructor() { }

  private cases: Case[] = [];
   values: number[] = [.01, 1, 5, 10, 25, 50, 75, 100,
                       200, 300, 400, 500, 750, 1000,
                       5000, 10000, 25000, 50000, 75000,
                       100000, 200000, 300000, 400000,
                       500000, 750000, 1000000];
  

  createNewCases(): void {
    this.cases = [];
    this.cases.push(new Case(1, 100));
    this.cases.push(new Case(2, 1000));
    this.cases.push(new Case(3, 10000))
    this.cases.push(new Case(4, 10));
    this.cases.push(new Case(5, 1));
    this.cases.push(new Case(6, 25));
  }

  createNewCases1(): void {
   let randomCaseNumbers: number[] = this.getRandomCaseNumbers(this.values.length);
  }

  getRandomCaseNumbers(cases: number): number[] {
    let retval: number[] = [];
    let basis: number[] = [...Array(cases + 1).keys()];
    basis.shift();
                          
    while(basis.length > 0) {
        let choice: number = Math.floor(Math.random() * (Math.floor(basis.length) + 1));
        retval.push(basis[choice]);
        basis[choice] = basis[basis.length - 1];
        basis.pop();
    }
    return retval;
  }

  getCases(): Case[] {
    if(this.cases.length == 0) {
      this.createNewCases();
    }
    return this.cases;
  }
}
