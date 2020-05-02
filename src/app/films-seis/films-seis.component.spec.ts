import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSeisComponent } from './films-seis.component';

describe('FilmsSeisComponent', () => {
  let component: FilmsSeisComponent;
  let fixture: ComponentFixture<FilmsSeisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsSeisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
