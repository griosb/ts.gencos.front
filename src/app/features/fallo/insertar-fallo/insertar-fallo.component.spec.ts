import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarFalloComponent } from './insertar-fallo.component';

describe('InsertarFalloComponent', () => {
  let component: InsertarFalloComponent;
  let fixture: ComponentFixture<InsertarFalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarFalloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarFalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
