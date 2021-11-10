
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../data/api'
import { RootState } from '../../reducer/reducer'

export function JobTotal() {
    const allJobs = useSelector((state: RootState) => state.jobs);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch])
    return (
        <div>
            <h1>Có tất cả {allJobs?.length} IT Jobs For Chất Developers</h1>

        </div>


    )
}
