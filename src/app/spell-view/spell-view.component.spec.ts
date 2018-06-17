import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellViewComponent } from './spell-view.component';

describe('SpellViewComponent', () => {
  let component: SpellViewComponent;
  let fixture: ComponentFixture<SpellViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
