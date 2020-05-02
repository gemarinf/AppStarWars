import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsTresComponent } from './films-tres.component';

describe('FilmsTresComponent', () => {
  let component: FilmsTresComponent;
  let fixture: ComponentFixture<FilmsTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
