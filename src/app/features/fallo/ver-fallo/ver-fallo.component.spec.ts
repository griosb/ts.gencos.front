import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFalloComponent } from './ver-fallo.component';

describe('VerFalloComponent', () => {
  let component: VerFalloComponent;
  let fixture: ComponentFixture<VerFalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFalloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerFalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
