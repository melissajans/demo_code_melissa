import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedewerkerlijstComponent } from './medewerkerslijst.component';

describe('MedewerkerlijstComponent', () => {
  let component: MedewerkerlijstComponent;
  let fixture: ComponentFixture<MedewerkerlijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedewerkerlijstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( MedewerkerlijstComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
