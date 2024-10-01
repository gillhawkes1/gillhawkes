import { NavButtonHoverDirective } from './nav-button-hover.directive';
import { ElementRef } from '@angular/core';

describe('NavButtonHoverDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('div'));
    const directive = new NavButtonHoverDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});

