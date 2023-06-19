import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketlistInputAddItensComponent } from './marketlist-input-add-itens.component';

describe('MarketlistInputAddItensComponent', () => {
  let component: MarketlistInputAddItensComponent;
  let fixture: ComponentFixture<MarketlistInputAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketlistInputAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketlistInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
