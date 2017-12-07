/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SSComponent } from './ss.component';

describe('SSComponent', () => {
  let component: SSComponent;
  let fixture: ComponentFixture<SSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
