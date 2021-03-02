import React from 'react';
import Header from '../../../common/Header';
import RequestList from './RequestList';
import Container from '@material-ui/core/Container';

const CounterStaff = () => {
  return (
		<>
			<Header />
			<Container>
				<RequestList />
			</Container>
		</>
  );
};
export default CounterStaff;
