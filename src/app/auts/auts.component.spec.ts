import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AutsComponent } from './auts.component';

describe('AutsComponent', () => {
  let component: AutsComponent;
  let fixture: ComponentFixture<AutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
