import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KursComponent } from './kurs.component';

describe('KursComponent', () => {
  let component: KursComponent;
  let fixture: ComponentFixture<KursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
