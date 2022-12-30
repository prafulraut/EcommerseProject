import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomdataComponent } from './ecomdata.component';

describe('EcomdataComponent', () => {
  let component: EcomdataComponent;
  let fixture: ComponentFixture<EcomdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
