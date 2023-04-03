import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import JobDetailComponent from "../../components/Jobs/JobDetailComponent/JobDetailComponent";
import { DispatchType, RootState } from "../../redux/configStore";
import { getJobByIdApi } from "../../redux/reducer/jobReducer";

type Props = {};

const JobDetail = (props: Props) => {
  const params = useParams();
  const { idJob } = params;
  const { jobItem } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getJobByIdApi(Number(idJob)));
  }, [dispatch, idJob]);

  return (
    <div className="container my-3 job-detail-page">
      <div className="row">
        <div className="col-9 shadow p-3 mb-5 bg-white rounded job-detail-page__left-content">
          <JobDetailComponent jobItem={jobItem} />
        </div>
        <div className="col-3 job-detail-page__right-content">
          <CompanyCard jobItem={jobItem} />
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
