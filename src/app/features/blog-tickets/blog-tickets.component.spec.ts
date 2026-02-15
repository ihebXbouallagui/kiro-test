import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTicketsComponent } from './blog-tickets.component';

describe('BlogTicketsComponent', () => {
  let component: BlogTicketsComponent;
  let fixture: ComponentFixture<BlogTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
