import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../state/actions/jobActions';
import Router from "../Router";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(""));
  }, [dispatch]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
