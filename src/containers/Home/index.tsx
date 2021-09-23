import React, { useEffect} from "react";
import "./Home.scss";
import Header from './component/header/index'
import SearchBox from './component/SearchBox/index'
import Result from "./component/Result/Result";
import axios from 'axios'
import { useAppDispatch } from '../redux/hook'
import { addJobList} from '../redux/jobSlices'

const URL = 'https://61484173035b3600175b9d08.mockapi.io/api/jobs/jobs'

function Home() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleGetData = async () => {
            await axios.get(URL)
            .then(res => {  
                dispatch(addJobList(res.data))     
            })
            .catch(err => {
                alert(err)
            })
        }
        handleGetData()
        
    },[])

    return (
        <div className="App container-fluid">
            <Header/>
            <SearchBox/>
            <Result/>
        </div>
    );
}

export default Home;

