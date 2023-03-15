import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';
import City from '../../Type/city';
import Job from '../../Type/job';
function Search() {
    const [jobs, setJob] = useState<Job[]>();
    const [city, setCity] = useState<City[]>();
    useEffect(()=>{
       axios.get(`${process.env.REACT_APP_API_URL}/products`)
       .then(res=>{
        setJob(res.data)
       })
       .catch(error => console.log(error));

       axios.get(`${process.env.REACT_APP_API_URL}/qltt`)
       .then(res=>{
        setCity(res.data);
       })
       .catch(error => console.log(error));
    },[])
    const RenderLocation = ():JSX.Element =>{
       return(
        <>
        { city?.map((item:City,key)=>{
            return(<option key={key} value={item.city}>{item.city}</option>)
        })}
        </>
       )
    }
    return (
        <div className='bg-dark text-light'>       
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search-selection'>
                        <select>
                            <option value={0}>All Cities</option>
                          <RenderLocation/>
                        </select>
                    </div>
                    <div className='col-10'>
                    <h2 data-testid='jobTest' className='total-job'>{jobs?.length} IT Jobs For "Chất" Developers</h2>
                        <form className="d-flex"> 
                            <input value="Search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <>test</>
    )
}
export default Search;