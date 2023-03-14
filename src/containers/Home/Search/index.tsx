import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Search() {
    const [jobs, setJob] = useState([]);
    const [city, setCity] = useState([]);
    useEffect(()=>{
       axios.get(`https://6183cb0191d76c00172d1b6b.mockapi.io/api/products`)
       .then(res=>{
        const data = res.data;
        setJob(data)
       })
       .catch(error => console.log(error));

       axios.get(`https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt`)
       .then(res=>{
        const data = res.data;
        setCity(data);
       })
       .catch(error => console.log(error));
    },[])
    const renderJobs = () =>{
            return (
                <h2>{jobs?.length} IT Jobs For "Chất" Developers</h2>
            )
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
export default Search;