import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { actFetchJob } from './modules/action';
export default function Search() {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(actFetchJob());
    },[])
    const jobs = useSelector((state)=> state.jobReducer.data);
    const renderJobs = () =>{
        let dem = 0;
        jobs?.map((item:any)=>{
            dem++;
            return dem;
        })
        if(dem!= 0){
            return (
                <h2>{dem} IT Jobs For "Chất" Developers</h2>
            )
        }
    }
    const renderLocation = () =>{
        return jobs?.map((item:any)=>{
            return(<option value={item.city}>{item.city}</option>)
        })
    }
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
            {renderJobs()}
                <div className="container-fluid py-5 row">
                    <div className='col-4'>
                        <select>
                            <option>All Cities</option>
                            {renderLocation()}
                        </select>
                    </div>
                    <div className='col-8'>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <>test</>
    )
}
