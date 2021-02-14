import PropTypes from 'prop-types';
import React from 'react';
import ReactLoading from 'react-loading';
import { withStyles } from '@material-ui/core';
import styles from './SetUp.Styles';
import useGetUserInformation from '../Hooks/useGetUserInformation';

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

function SetUp(props) {
  const { classes } = props;

  useGetUserInformation();

  return (
    <div className={classes.root}>
      <ReactLoading type={'spin'} color="#fff" />
    </div>
  );
}

SetUp.propTypes = propTypes;

export default withStyles(styles)(SetUp);
