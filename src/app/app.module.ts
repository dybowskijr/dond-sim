import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardTileComponent } from './board-tile/board-tile.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CaseService } from './case.service';
import { CaseStageComponent } from './case-stage/case-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardTileComponent,
    ScorecardComponent,
    CaseStageComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
