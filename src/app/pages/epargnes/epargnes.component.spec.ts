import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargnesComponent } from './epargnes.component';

describe('EpargnesComponent', () => {
  let component: EpargnesComponent;
  let fixture: ComponentFixture<EpargnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpargnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
