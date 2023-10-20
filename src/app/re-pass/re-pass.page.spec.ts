import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RePassPage } from './re-pass.page';

describe('RePassPage', () => {
  let component: RePassPage;
  let fixture: ComponentFixture<RePassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
