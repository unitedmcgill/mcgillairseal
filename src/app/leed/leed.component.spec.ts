/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeedComponent } from './leed.component';

describe('AcComponent', () => {
  let component: LeedComponent;
  let fixture: ComponentFixture<LeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
