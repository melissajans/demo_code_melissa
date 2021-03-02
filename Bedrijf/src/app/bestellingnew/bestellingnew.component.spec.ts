import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingnewComponent } from './bestellingnew.component';

describe('BestellingnewComponent', () => {
  let component: BestellingnewComponent;
  let fixture: ComponentFixture<BestellingnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellingnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
