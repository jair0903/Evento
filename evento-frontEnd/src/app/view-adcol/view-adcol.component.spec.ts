import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdcolComponent } from './view-adcol.component';

describe('ViewAdcolComponent', () => {
  let component: ViewAdcolComponent;
  let fixture: ComponentFixture<ViewAdcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
