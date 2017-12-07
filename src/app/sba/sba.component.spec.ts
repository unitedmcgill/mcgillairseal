/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SBAComponent } from './sba.component';

describe('SBComponent', () => {
  let component: SBAComponent;
  let fixture: ComponentFixture<SBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
