/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SBComponent } from './sb.component';

describe('SBComponent', () => {
  let component: SBComponent;
  let fixture: ComponentFixture<SBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
