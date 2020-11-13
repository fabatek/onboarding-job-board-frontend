import React, {useEffect} from "react";
import { act } from "react-dom/test-utils";
import "./Home.scss";
import {fetchJobsRequest} from '../../actions'
import {connect, RootStateOrAny} from 'react-redux'
function Home ( props: RootStateOrAny) {
  useEffect(() => {
    props.fetchAllJobs()
    console.log(props.jobs)
  })
  return (
    <div className="home">
      <img alt="faba" src={window.location.origin + '/faba.png'} />
      <p> {props.jobs['job-count']} IT Jobs are available</p>
    </div>
  );
}
const mapStateToProps = (state: RootStateOrAny) => {
  return {
    jobs: state.getJob
  }
}
const mapDispatchToProps = (dispatch: RootStateOrAny)=>{
  return {
    fetchAllJobs: ()=>{
      dispatch( fetchJobsRequest() )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
