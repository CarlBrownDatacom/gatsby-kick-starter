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

export default (Object.keys(THEME.layout) as any).reduce((fromAccumulator: Layout, fromName: keyof Layout): Layout => {
  const from = fromAccumulator;

  from[fromName] = (Object.keys(THEME.layout) as any).reduce((toAccumulator: Layout, toName: keyof Layout): Layout => {
    const to = toAccumulator;

    const minWidth = `min-width: ${THEME.layout[fromName].breakpoint}px`;
    const maxWidth = `max-width: ${THEME.layout[toName].breakpoint - 1}px`;

    to[toName] = (styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => css`
      @media screen and (${minWidth}) and (${maxWidth}) {
        ${styles}
      }
    `;

    return to;
  }, {});

  return from;
}, {});
