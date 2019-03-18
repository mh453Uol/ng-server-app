import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmServerComponent } from './sm-server.component';

describe('SmServerComponent', () => {
  let component: SmServerComponent;
  let fixture: ComponentFixture<SmServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
