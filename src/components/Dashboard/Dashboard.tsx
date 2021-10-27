import React,{useState, useEffect, FC} from 'react'
import './Dashboard.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
const options = ['Ho Chi Minh', 'Ha Noi', 'Da Nang', 'Can Tho'];
const Dashboard : FC = () => {
    const [jobs, setJobs] = useState([].slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 10;
    const pagesVisited = pageNumber * jobsPerPage;
    
    
    useEffect(() => {
        axios.get('https://6176370c03178d00173daae3.mockapi.io/api/api')
        .then(res => {
            setJobs(res.data)
        }).catch(err => {
            console.log(err);
        })
    },[])
    
    //Pagination
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    const changePage = ({ selected }:any) => {
    setPageNumber(selected);
  };

    return (
        <div className="dashBoard">
            <h1>Có tất cả {jobs.length} IT Jobs For Chất Developers</h1>
            <div className='search'>
                <div className="search__form">
                    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '55ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Search" variant="outlined" />
                    
                    </Box>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="City" />}
                        />
                </div>
            </div>
                {jobs.slice(pagesVisited, pagesVisited + jobsPerPage)
                    .map((jobs:any) => (       
                        <div key={jobs.id} className="jobsCard">
                            <div className="jobsCard__left">
                                <img src={jobs.jobImg} alt="" />
                            </div>
                            <div className = "jobsCard__center">
                                <a href="" id="name">{jobs.jobName}</a>
                                <a href="" id="company">{jobs.jobCompany}</a>
                                <a href="" id="type">{jobs.jobType}</a>
                            </div>
                            <div className="jobsCard__right">
                                <p>{jobs.jobArea}</p>
                            </div>
                            
                        </div>
                    ))}
            <div className="dashBoard__pagination">
                <Stack spacing={2}>
                    <Pagination count={10} />
                </Stack>
            </div>

        </div>
        
    )
}

export default Dashboard
