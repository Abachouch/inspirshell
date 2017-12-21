import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { BoardPanelComponent } from './board-panel/board-panel.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { LabelsPanelComponent } from './labels-panel/labels-panel.component';
import { BoardsPanelComponent } from './boards-panel/boards-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardPanelComponent,
    ContentPanelComponent,
    NavbarPanelComponent,
    LabelsPanelComponent,
    BoardsPanelComponent
  ],
  imports: [
    BrowserModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
