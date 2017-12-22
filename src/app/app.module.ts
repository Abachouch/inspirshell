import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// import { Routes, RouterModule } from '@angular/router';

import { BoardPanelComponent } from './board-panel/board-panel.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { NavbarPanelComponent } from './navbar-panel/navbar-panel.component';
import { LabelsPanelComponent } from './labels-panel/labels-panel.component';
import { BoardsPanelComponent } from './boards-panel/boards-panel.component';
import { ItemsLabelComponent } from './items-label/items-label.component';
import { ImageItemComponent } from './image-item/image-item.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: ContentPanelComponent },

// ];

@NgModule({
  declarations: [
    AppComponent,
    BoardPanelComponent,
    ContentPanelComponent,
    NavbarPanelComponent,
    LabelsPanelComponent,
    BoardsPanelComponent,
    ItemsLabelComponent,
    ImageItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
