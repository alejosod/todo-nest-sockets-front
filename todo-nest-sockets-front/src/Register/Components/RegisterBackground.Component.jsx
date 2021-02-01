import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './RegisterBackground.Styles';

const propTypes = {
  classes: {
    root: PropTypes.string,
  },
};

function RegisterBackgroundComponent(props) {
  const { classes } = props;

  return (
        <div className={classes.root}>
            <div className={classes.gradientBackground} />
        </div>
  );
}

RegisterBackgroundComponent.propTypes = propTypes;

export default withStyles(styles)(RegisterBackgroundComponent);
