import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavController } from '@ionic/angular';

import { WhitePage } from './white.page';
import { createNavControllerMock } from '../../../test/mocks';

describe('WhitePage', () => {
  let component: WhitePage;
  let fixture: ComponentFixture<WhitePage>;
  let navController;

  beforeEach(
    waitForAsync(() => {
      navController = createNavControllerMock();
      TestBed.configureTestingModule({
        declarations: [WhitePage],
        providers: [{ provide: NavController, useValue: navController }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePage);
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
      expect(navController.navigateForward).toHaveBeenCalledWith('/yellow');
    });
  });

  describe('previous', () => {
    it('navigates back', () => {
      component.previous();
      expect(navController.navigateBack).toHaveBeenCalledTimes(1);
      expect(navController.navigateBack).toHaveBeenCalledWith('/herbal');
    });
  });
});
