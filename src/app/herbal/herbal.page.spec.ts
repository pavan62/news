import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';

import { HerbalPage } from './herbal.page';
import { createNavControllerMock } from '../../../test/mocks';

describe('HerbalPage', () => {
  let component: HerbalPage;
  let fixture: ComponentFixture<HerbalPage>;
  let navController;

  beforeEach(
    waitForAsync(() => {
      navController = createNavControllerMock();
      TestBed.configureTestingModule({
        declarations: [HerbalPage],
        providers: [{ provide: NavController, useValue: navController }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalPage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/white');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/puer');
    });
  });
});
