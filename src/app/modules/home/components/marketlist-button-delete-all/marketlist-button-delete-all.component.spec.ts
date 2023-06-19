import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketlistButtonDeleteAllComponent } from './marketlist-button-delete-all.component';

describe('MarketlistButtonDeleteAllComponent', () => {
  let component: MarketlistButtonDeleteAllComponent;
  let fixture: ComponentFixture<MarketlistButtonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketlistButtonDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketlistButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
