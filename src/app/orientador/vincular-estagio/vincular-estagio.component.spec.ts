import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularEstagioComponent } from './vincular-estagio.component';

describe('VincularEstagioComponent', () => {
  let component: VincularEstagioComponent;
  let fixture: ComponentFixture<VincularEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
