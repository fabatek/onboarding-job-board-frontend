import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { actFetchJob,actFetchCity } from './modules/action';
export default function Search() {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(actFetchJob());
       dispatch(actFetchCity());
    },[])
    const jobs = useSelector((state: any)=> state.jobReducer.data);
    const city = useSelector((state:any)=> state.cityReducer.data)
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
        return city?.map((item:any)=>{
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
