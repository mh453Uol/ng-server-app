import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmEditServerComponent } from './sm-edit-server.component';

describe('SmEditServerComponent', () => {
  let component: SmEditServerComponent;
  let fixture: ComponentFixture<SmEditServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmEditServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmEditServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
