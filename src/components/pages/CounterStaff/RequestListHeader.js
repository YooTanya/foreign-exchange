import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const RequestListHeader = () => {
  return (
		<>
			<Grid container justify="space-between">
				<Grid class="item" xs={6}>
					<Typography variant="h4">Request List</Typography>
				</Grid>
				<Grid class="item" xs={6} >
					<Button variant="contained" color="primary">
						New Request
					</Button>
          <Button variant="contained">
						Refresh
					</Button>
				</Grid>
			</Grid>
		</>
  );
};

export default RequestListHeader;
