import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListFilmComponent } from './admin-list-film.component';

describe('AdminListFilmComponent', () => {
  let component: AdminListFilmComponent;
  let fixture: ComponentFixture<AdminListFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
