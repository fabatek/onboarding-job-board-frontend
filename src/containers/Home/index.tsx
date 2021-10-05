import React, { useEffect } from "react";
import "./Home.scss";
import Total from "./total";
import Jobs from "./jobs";
import { typeStates } from "../Redux/type";
import { requestJobsAction } from "../Redux/Action";
import { SystemState } from "../Redux/type";
import { connect } from "react-redux";
interface AppProps {
  jobs: SystemState;
  requestJobsAction: any;
}
const Home: React.FC<AppProps> = ({ jobs, requestJobsAction }: AppProps) => {
  useEffect(() => {
    requestJobsAction();
  }, []);

  return (
    <div className="App">
      <Total totalJobs={jobs.jobs.length} />
      <Jobs jobs={jobs.jobs} />
    </div>
  );
};

const mapStateToProps = (state: typeStates) => ({
  jobs: state.jobs,
});
const mapDispatchToProps = {
  requestJobsAction: requestJobsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
