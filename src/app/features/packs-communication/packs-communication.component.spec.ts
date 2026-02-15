import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksCommunicationComponent } from './packs-communication.component';

describe('PacksCommunicationComponent', () => {
  let component: PacksCommunicationComponent;
  let fixture: ComponentFixture<PacksCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
