import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadHorarioComponent } from './cad-horario.component';

describe('CadHorarioComponent', () => {
  let component: CadHorarioComponent;
  let fixture: ComponentFixture<CadHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
