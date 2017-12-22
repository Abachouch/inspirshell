import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLabelComponent } from './items-label.component';

describe('ItemsLabelComponent', () => {
  let component: ItemsLabelComponent;
  let fixture: ComponentFixture<ItemsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
