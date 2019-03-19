import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpThemeComponent } from './cp-theme.component';

describe('CpThemeComponent', () => {
  let component: CpThemeComponent;
  let fixture: ComponentFixture<CpThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
