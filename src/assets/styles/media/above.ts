/* eslint-disable @typescript-eslint/no-explicit-any */

import { css, FlattenSimpleInterpolation } from 'styled-components';

import THEME from '../config';

interface Layout {
  mobile: object;
  mobileLarge: object;
  tablet: object;
  desktop: object;
  desktopLarge: object;
}

export default (Object.keys(THEME.layout) as any).reduce((accumulator: Layout, breakpoint: keyof Layout): Layout => {
  accumulator[breakpoint] = (styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
    @media screen and (min-width: ${THEME.layout[breakpoint].breakpoint}px) {
      ${styles}
    }
  `;

  return accumulator;
}, {});
