import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';
function Search() {
    const [jobs, setJob] = useState([]);
    const [city, setCity] = useState([]);
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
    const renderJobs = () =>{
            return (
                <h2 data-testid='id1' className='totalJob'>{jobs?.length} IT Jobs For "Chất" Developers</h2>
            )
    }
    const renderLocation = () =>{
        return city?.map((item:any,key)=>{
            return(<option key={key} value={item.city}>{item.city}</option>)
        })
    }
    return (
        <div className='bg-dark text-light'>       
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search-selection'>
                        <select>
                            <option>All Cities</option>
                            {renderLocation()}
                        </select>
                    </div>
                    <div className='col-10'>
                    {renderJobs()}
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
export default Search;