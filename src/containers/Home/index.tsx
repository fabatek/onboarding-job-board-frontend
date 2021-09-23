import React, { useEffect} from "react";
import "./Home.scss";
import Header from './component/header/index'
import SearchBox from './component/SearchBox/index'
import Result from "./component/Result/Result";
import { useAppDispatch } from '../redux/hook'
import { fetchJobList } from '../redux/jobSlices'

const URL = 'https://61484173035b3600175b9d08.mockapi.io/api/jobs/jobs'

function Home() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchJobList(URL))
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

