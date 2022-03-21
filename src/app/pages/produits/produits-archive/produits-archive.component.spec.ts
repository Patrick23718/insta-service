import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsArchiveComponent } from './produits-archive.component';

describe('ProduitsArchiveComponent', () => {
  let component: ProduitsArchiveComponent;
  let fixture: ComponentFixture<ProduitsArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
