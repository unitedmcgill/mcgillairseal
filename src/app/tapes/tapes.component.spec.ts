/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TapesComponent } from './tapes.component';

describe('SBComponent', () => {
  let component: TapesComponent;
  let fixture: ComponentFixture<TapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
