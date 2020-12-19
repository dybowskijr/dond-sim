import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStageComponent } from './case-stage.component';

describe('CaseStageComponent', () => {
  let component: CaseStageComponent;
  let fixture: ComponentFixture<CaseStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
