import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actFetchJob } from '../Search/modules/action';
export default function Jobs() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchJob())
    }, [])
    const jobs = useSelector((state) => state.jobReducer.data);
    const renderJobs = () => {
        return jobs?.map((item: any) => {
            return (
                <div className='row'>
                    <div className='col-6'>
                        <div className='job-content d-flex'>
                            <img src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzRvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0c0d2b976b107ef51289f0361754cea78ab9313e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--80ef1c6b35a79f9e028daec95b88475f53428fd7/floware-logo.png' />
                            <div>
                                <h2>{item.tenCV}</h2>
                                <p>{item.congNghe}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'></div>
                </div>
            )
        })
    }
    return (
        <div className='container'>
            {renderJobs()};
        </div>
    )
}
