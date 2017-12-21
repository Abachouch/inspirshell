import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsPanelComponent } from './labels-panel.component';

describe('LabelsPanelComponent', () => {
  let component: LabelsPanelComponent;
  let fixture: ComponentFixture<LabelsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
