import Proptypes from 'prop-types';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../../modules/styles';

const propTypes = {
  children: Proptypes.node.isRequired,
};

function ContextProvider(props) {
  const { children } = props;

  return (
        <MuiThemeProvider theme={theme} >
            {children}
        </MuiThemeProvider>
  );
}

ContextProvider.propTypes = propTypes;

export default ContextProvider;
