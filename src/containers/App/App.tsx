import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs, setDetailJob, setJobsPerPage } from '../../redux/actions/JobsAction';
import { RootStore } from '../../utils/TypeScripts';
import Router from "../Router";

const App = () => {
	const jobs = useSelector((state: RootStore) => state.jobs)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getJobs())
	}, [dispatch])
	useEffect(() => {
		if (jobs) {
			dispatch(setJobsPerPage(1, jobs))
			dispatch(setDetailJob(jobs[0]))
		}
	}, [jobs])
	return (
		<>
			<Router />
		</>
	);
}

export default App;
