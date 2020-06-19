import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesMapComponent } from './universities-map.component';

describe('UniversitiesMapComponent', () => {
  let component: UniversitiesMapComponent;
  let fixture: ComponentFixture<UniversitiesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
