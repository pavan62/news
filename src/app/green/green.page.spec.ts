import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';

import { GreenPage } from './green.page';
import { createNavControllerMock } from '../../../test/mocks';

describe('GreenPage', () => {
  let component: GreenPage;
  let fixture: ComponentFixture<GreenPage>;
  let navController;

  beforeEach(
    waitForAsync(() => {
      navController = createNavControllerMock();
      TestBed.configureTestingModule({
        declarations: [GreenPage],
        providers: [{ provide: NavController, useValue: navController }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/oolong');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/yellow');
    });
  });
});
