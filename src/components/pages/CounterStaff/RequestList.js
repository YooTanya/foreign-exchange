import React, { useState } from 'react';
import RequestListHeader from './RequestListHeader';
import RequestListEmpty from './RequestListEmpty';
import RequestListTable from './RequestListTable';

const RequestList = () => {
	const [requestList, setRequestList] = useState([]);

  return (
		<>
			<RequestListHeader />
			{ requestList.lenght > 0 ? 
				<RequestListTable /> : <RequestListEmpty /> }
		</>
  );
};

export default RequestList;
