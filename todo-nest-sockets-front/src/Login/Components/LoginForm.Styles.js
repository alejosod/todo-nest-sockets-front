const loginStyles = (theme) => ({
  root: {
    padding: `${theme.spacing(10)}px ${theme.spacing(6)}px`,
    maxWidth: 500,
    width: '100%',
    margin: '0 auto',
  },
  form: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(4),
    },
  },
});

export default loginStyles;
