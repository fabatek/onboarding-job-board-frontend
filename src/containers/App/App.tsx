import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterTitleJob, getJobs, setJobsPerPage } from '../../redux/actions/JobsAction';
import Router from "../Router";

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getJobs())
		dispatch(setJobsPerPage(2))
		dispatch(filterTitleJob('eng'))
	}, [dispatch])
	return (
		<>
			<Router />
		</>
	);
}

export default App;
