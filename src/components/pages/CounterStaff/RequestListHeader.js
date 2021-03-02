import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {},
  buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
  },
}));

const RequestListHeader = ({handleOnClickRefresh}) => {
  const classes = useStyles();

  return (
		<>
			<Grid container justify="space-between">
				<Grid item xs={6}>
					<Typography variant="h4">Request List</Typography>
				</Grid>
				<Grid item xs={6}>
					<Box className={classes.buttons}>
						<Button variant="contained" color="primary">
							New Request
						</Button>
						<Button variant="contained" onClick={handleOnClickRefresh}>
							Refresh
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
  );
};

export default RequestListHeader;
