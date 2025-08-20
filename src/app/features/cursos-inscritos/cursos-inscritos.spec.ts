import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInscritos } from './cursos-inscritos';

describe('CursosInscritos', () => {
  let component: CursosInscritos;
  let fixture: ComponentFixture<CursosInscritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosInscritos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosInscritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
