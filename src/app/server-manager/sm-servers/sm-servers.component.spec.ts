import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmServersComponent } from './sm-servers.component';

describe('SmServersComponent', () => {
  let component: SmServersComponent;
  let fixture: ComponentFixture<SmServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
