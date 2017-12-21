import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPanelComponent } from './navbar-panel.component';

describe('NavbarPanelComponent', () => {
  let component: NavbarPanelComponent;
  let fixture: ComponentFixture<NavbarPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
