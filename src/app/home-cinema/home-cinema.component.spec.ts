import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCinemaComponent } from './home-cinema.component';

describe('HomeCinemaComponent', () => {
  let component: HomeCinemaComponent;
  let fixture: ComponentFixture<HomeCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
