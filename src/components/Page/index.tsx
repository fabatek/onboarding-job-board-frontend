import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination'
import { Job } from '../../state/constants/jobConstant';
import { useDispatch } from 'react-redux';
import {getData, getSearchData} from '../../state/actions/jobActions';



import "./styles.scss"

interface PropsType {
  jobList: Job[];
  text:String;

}

function Page(props: PropsType) {
  const dispatch = useDispatch();
  const handePagination = (page: Number) => {
    if(props.text === ""){
      dispatch(getData(page));
    }else{
      dispatch(getSearchData(props.text,page));
    }   
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