import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getJobs } from '../../redux/actions/JobsAction';
import Router from "../Router";

function App() {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getJobs())
	},[dispatch])
	return (
		<>
			<Router />
		</>
	);
}

export default App;
