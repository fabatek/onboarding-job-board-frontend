import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Job } from "../../../types/types";

interface Props {
  job: Job;
}

const JobStyled = styled.div`
  width: 800px;
  height: 300px;
  margin: 30px auto;
  border: 1px solid #f4f4f4;
  border-radius: 8px;
`;

const ImgStyled = styled.img`
  float: left;
  padding-right: 40px;
`;

const InfoDivStyled = styled.div`
  width: calc(100% - 340px);
  height: 100%;
  float: left;

  a.title {
    font-size: 50px;
    color: black;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }

  p.companyname {
    font-size: 14px;
    color: #9b9b9b;
  }
`;

const GroupSalLocaStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p.salary,
  p.location {
    display: block;
    font-size: 14px;
    color: #9b9b9b;
  }
`;

function JobCard(props: Props) {
  const { job } = props;

  return (
    <JobStyled className="job">
      <ImgStyled
        src="https://picsum.photos/300"
        className="job__logo"
        alt="logo"
      />
      <InfoDivStyled className="job__info">
        <Link to="/" className="title">
          {job.title}
        </Link>
        <p className="companyname">{job.company_name}</p>
        <GroupSalLocaStyled className="salary-location">
          <p className="salary">$ {job.salary}</p>
          <p className="location">{job.candidate_required_location}</p>
        </GroupSalLocaStyled>
        <p className="category">{job.category}</p>
        <p className="jobtype">{job.job_type}</p>
      </InfoDivStyled>
    </JobStyled>
  );
}

export default JobCard;
