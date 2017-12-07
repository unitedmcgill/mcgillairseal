/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GasketsComponent } from './gaskets.component';

describe('SBComponent', () => {
  let component: GasketsComponent;
  let fixture: ComponentFixture<GasketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
