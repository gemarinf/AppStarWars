import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCincoComponent } from './films-cinco.component';

describe('FilmsCincoComponent', () => {
  let component: FilmsCincoComponent;
  let fixture: ComponentFixture<FilmsCincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
