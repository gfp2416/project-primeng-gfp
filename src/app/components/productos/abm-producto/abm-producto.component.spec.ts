import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmProductoComponent } from './abm-producto.component';

describe('AbmProductoComponent', () => {
  let component: AbmProductoComponent;
  let fixture: ComponentFixture<AbmProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbmProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbmProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
