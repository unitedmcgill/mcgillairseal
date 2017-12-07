/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APComponent } from './ap.component';

describe('APComponent', () => {
  let component: APComponent;
  let fixture: ComponentFixture<APComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
