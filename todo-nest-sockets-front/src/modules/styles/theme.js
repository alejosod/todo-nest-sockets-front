import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 4,
});

const themeFontSized = responsiveFontSizes(theme, {});

export default themeFontSized;
