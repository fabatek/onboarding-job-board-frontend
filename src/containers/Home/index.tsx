import React, {useState, useEffect} from "react";
import "./Home.scss";
import Header from './component/header/index'
import SearchBox from './component/SearchBox/index'
import Result from "./component/Result/Result";
import axios from 'axios'
import {Jobs} from './component/Jobs'

const URL = 'https://61484173035b3600175b9d08.mockapi.io/api/jobs/jobs'

function Home() {
    const [totalJobs, setTotalJobs] = useState<Jobs[]>([])
    const [availableJobs, setAvailableJobs] = useState<number>(0)

    useEffect(() => {
        const handleGetData = async () => {
            await axios.get(URL)
            .then(res => { 
                setTotalJobs(res.data)       
            })
            .catch(err => {
                alert(err)
            })
        }
        handleGetData()
        
    },[])

    useEffect(() => {
        if (totalJobs) {
            const hiringJobs:any = totalJobs.filter(job => job.Available === true)
            setAvailableJobs(hiringJobs.length);
        }
    }, [totalJobs])

    return (
        <div className="App container-fluid">
            <Header/>
            <SearchBox availableJobs={availableJobs} totalJobs={totalJobs.length}/>
            <Result totalJobs={totalJobs}/>
        </div>
    );
}

export default Home;
