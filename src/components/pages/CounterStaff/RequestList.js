import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RequestListHeader from './RequestListHeader';
import RequestListEmpty from './RequestListEmpty';
import RequestListTable from './RequestListTable';

const useStyles = makeStyles((theme) => ({
  root: {
		paddingTop: theme.spacing(5)
	},
	header: {
		marginBottom: theme.spacing(3)
	},
	body: {}
}));


const RequestList = () => {
  const classes = useStyles();
	const [requestList, setRequestList] = useState(false);

	const handleOnClickRefresh = () => {
		setRequestList(true)
	}

  return (
		<div className={classes.root}>
			<div className={classes.header}>
				<RequestListHeader handleOnClickRefresh={handleOnClickRefresh}/>
			</div>
			<div className={classes.body}>
				{ requestList ? 
				<RequestListTable /> : <RequestListEmpty /> }
			</div>
		
		</div>
  );
};

export default RequestList;
