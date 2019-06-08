import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmUserComponent } from './sm-user.component';

describe('SmUserComponent', () => {
  let component: SmUserComponent;
  let fixture: ComponentFixture<SmUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
