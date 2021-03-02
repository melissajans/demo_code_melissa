import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantnewComponent } from './klantnew.component';

describe('KlantnewComponent', () => {
  let component: KlantnewComponent;
  let fixture: ComponentFixture<KlantnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlantnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
