import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesArchiveComponent } from './categories-archive.component';

describe('CategoriesArchiveComponent', () => {
  let component: CategoriesArchiveComponent;
  let fixture: ComponentFixture<CategoriesArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
