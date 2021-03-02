import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerComponent } from './medewerker.component';

describe('MedewerkerComponent', () => {
  let component: MedewerkerComponent;
  let fixture: ComponentFixture<MedewerkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
