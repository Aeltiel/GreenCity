import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesFormComponent } from './plantes-form.component';

describe('PlantesFormComponent', () => {
  let component: PlantesFormComponent;
  let fixture: ComponentFixture<PlantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
