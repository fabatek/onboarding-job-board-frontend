import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination'
import { Job } from '../../state/constants/jobConstant';
import { GET_PAGINATION_JOBS } from "../../state/constants/jobConstant";
import { useDispatch } from 'react-redux';

import "./styles.scss"

interface PropsType {
  jobList: Job[];

}

function Page(props: PropsType) {
  const dispatch = useDispatch();
  const handePagination = (page: Number) => {
    dispatch({ type: GET_PAGINATION_JOBS, payload: page });
  }
  return (
    <div className='page'>
      <Pagination >
        {Array(Math.ceil(props.jobList.length / 10)).fill(0).map((item, index) =>
          <Pagination.Item role="testpage" data-testid="test-page" onClick={() => handePagination(index + 1)}
            key={index}>{index + 1}
          </Pagination.Item>
        )}
      </Pagination>
    </div>
  );
}

export default Page