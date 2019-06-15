import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodorroTimerComponent } from './pomodorro-timer.component';

describe('PomodorroTimerComponent', () => {
  let component: PomodorroTimerComponent;
  let fixture: ComponentFixture<PomodorroTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodorroTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodorroTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
