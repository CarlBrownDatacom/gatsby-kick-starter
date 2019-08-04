/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import THEME from './src/assets/styles/config';
import GlobalStyle from './src/assets/styles/globalStyle';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={THEME}>
    <Fragment>
      <GlobalStyle />
      {element}
    </Fragment>
  </ThemeProvider>
);

// INFO: You cannot export default here... interesting
