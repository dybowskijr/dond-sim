
export class Case {

  status: string; // unopened, opened
  firstPick: boolean;

  constructor(
      public caseNumber: number,
      public value: number
  ) {
      this.status = 'unopened';
      this.firstPick = false;
  }

  toggle(): void {
      this.status = (this.status == 'unopened') ? 'opened' : 'unopened';
  }
  
  
}

