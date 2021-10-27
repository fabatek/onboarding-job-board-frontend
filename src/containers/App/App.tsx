import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobs, setJobsPerPage } from '../../redux/actions/JobsAction';
import Router from "../Router";

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getJobs())
		dispatch(setJobsPerPage(1))
	}, [dispatch])
	return (
		<>
			<Router />
		</>
	);
}

export default App;
