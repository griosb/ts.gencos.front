import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedidasComponent } from './lista-medidas.component';

describe('ListaMedidasComponent', () => {
  let component: ListaMedidasComponent;
  let fixture: ComponentFixture<ListaMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMedidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
