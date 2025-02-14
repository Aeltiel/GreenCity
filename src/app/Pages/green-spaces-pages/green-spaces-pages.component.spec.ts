import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSpacesPagesComponent } from './green-spaces-pages.component';

describe('GreenSpacesPagesComponent', () => {
  let component: GreenSpacesPagesComponent;
  let fixture: ComponentFixture<GreenSpacesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSpacesPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenSpacesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
