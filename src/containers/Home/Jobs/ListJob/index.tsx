import React,{useEffect,useState} from 'react'
import Job from '../../../model/job';
import { getJobs } from '../../../Redux/jobs/jobSlice';
import {useSelector , useDispatch} from "react-redux"
import { RootState } from '../../../Redux/store/store';
export default function ListJob() {
    const data = useSelector ((state:RootState) => state.jobs)
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getJobs());
    },[]);
    const jobs= data.data;
    const loading = data.loading;
    if(loading){
        return(
            <div>Loading...</div>
        )
    }else{
        return <>
    {jobs?.map((item: Job, key: number) => {
        return (      
            <a key={key} >   
                <li className={`list-group-item d-flex job`} data-testid="test100Jobs">
                    <img className='job__img' alt='logo' src={item.img} />
                    <div className='job__tittle'>
                        <h6>{item.tenCV}</h6>
                        <p>
                            <ul className='job__tech'>
                                <li>Html</li>
                                <li>Css</li>
                            </ul>
                        </p>
                    </div>
                    <div className='job__city'>
                    <p>{item.city}</p>
                    <p className='job__posted'>1 day ago</p>
                    </div>
                </li>
            </a>
        )
    })}
    </>
    }
}

