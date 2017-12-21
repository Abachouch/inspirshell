import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsPanelComponent } from './boards-panel.component';

describe('BoardsPanelComponent', () => {
  let component: BoardsPanelComponent;
  let fixture: ComponentFixture<BoardsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
