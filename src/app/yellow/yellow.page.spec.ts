import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';

import { YellowPage } from './yellow.page';
import { createNavControllerMock } from '../../../test/mocks';

describe('YellowPage', () => {
  let component: YellowPage;
  let fixture: ComponentFixture<YellowPage>;
  let navController;

  beforeEach(
    waitForAsync(() => {
      navController = createNavControllerMock();
      TestBed.configureTestingModule({
        declarations: [YellowPage],
        providers: [{ provide: NavController, useValue: navController }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('next', () => {
    it('navigates forward', () => {
      component.next();
      expect(navController.navigateForward).toHaveBeenCalledTimes(1);
      expect(navController.navigateForward).toHaveBeenCalledWith('/green');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/white');
    });
  });
});
