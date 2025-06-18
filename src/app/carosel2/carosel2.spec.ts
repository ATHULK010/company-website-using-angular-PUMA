import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosel2 } from './carosel2';

describe('Carosel2', () => {
  let component: Carosel2;
  let fixture: ComponentFixture<Carosel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosel2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosel2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
