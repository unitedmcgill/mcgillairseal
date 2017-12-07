/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AIAComponent } from './aia.component';

describe('SBComponent', () => {
  let component: AIAComponent;
  let fixture: ComponentFixture<AIAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
