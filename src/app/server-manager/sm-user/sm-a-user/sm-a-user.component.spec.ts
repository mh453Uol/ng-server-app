import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAUserComponent } from './sm-a-user.component';

describe('SmAUserComponent', () => {
  let component: SmAUserComponent;
  let fixture: ComponentFixture<SmAUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmAUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmAUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
