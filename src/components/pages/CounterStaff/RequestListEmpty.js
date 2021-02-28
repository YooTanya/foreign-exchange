import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: theme.spacing(20),
    borderRadius: '5px',
    backgroundColor: '#dedede',
  }
}));

const RequestListEmpty = (props) => {
  const classes = useStyles();
  return (
		<Box class={classes.root}>
      <Paper class={classes.paper}>
        <Typography>There is no request yet.</Typography>
      </Paper>
    </Box>
  );
};

export default RequestListEmpty;
