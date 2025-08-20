import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaInscritos } from './busqueda-inscritos';

describe('BusquedaInscritos', () => {
  let component: BusquedaInscritos;
  let fixture: ComponentFixture<BusquedaInscritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaInscritos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaInscritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
