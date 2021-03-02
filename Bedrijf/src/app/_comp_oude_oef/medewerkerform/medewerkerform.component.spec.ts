import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerformComponent } from './medewerkerform.component';

describe('MedewerkerformComponent', () => {
  let component: MedewerkerformComponent;
  let fixture: ComponentFixture<MedewerkerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkerformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedewerkerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
