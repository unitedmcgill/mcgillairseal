/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TBPComponent } from './tbp.component';

describe('TBPComponent', () => {
  let component: TBPComponent;
  let fixture: ComponentFixture<TBPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TBPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
