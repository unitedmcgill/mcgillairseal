/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WBAComponent } from './wba.component';

describe('WBAComponent', () => {
  let component: WBAComponent;
  let fixture: ComponentFixture<WBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
