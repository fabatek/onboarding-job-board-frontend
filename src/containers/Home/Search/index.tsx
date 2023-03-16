import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios';
import City from './Type/city';
import Job from './Type/job';
function Search() {
    const [jobs, setJobs] = useState<Job[]>();
    const [city, setCity] = useState<City[]>();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => {
                setJobs(res.data)
            })
            .catch(error => console.log(error));

        axios.get(`${process.env.REACT_APP_API_URL}/qltt`)
            .then(res => {
                setCity(res.data);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search-selection'>
                        <select>
                            <option value={0}>All Cities</option>
                            {city?.map((item: City, key) => {
                                return (<option key={key} value={item.city}>{item.city}</option>)
                            })}
                        </select>
                    </div>
                    <div className='col-10' data-testid='jobTest'>
                        <h2 className='total-job'>{jobs?.length} IT Jobs For "Chất" Developers</h2>
                        <form className="d-flex">
                            <input value="Search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;