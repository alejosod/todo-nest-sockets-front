import Proptypes from 'prop-types';
import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { MuiThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import theme from '../../modules/styles';

const propTypes = {
  children: Proptypes.node.isRequired,
};

function ContextProvider(props) {
  const { children } = props;

  return (
      <RecoilRoot>
          <ToastProvider autoDismiss>
              <MuiThemeProvider theme={theme} >
                  {children}
              </MuiThemeProvider>
          </ToastProvider>
      </RecoilRoot>
  );
}

ContextProvider.propTypes = propTypes;

export default ContextProvider;
