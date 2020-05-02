import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCuatroComponent } from './films-cuatro.component';

describe('FilmsCuatroComponent', () => {
  let component: FilmsCuatroComponent;
  let fixture: ComponentFixture<FilmsCuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
