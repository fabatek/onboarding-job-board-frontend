import React from "react";
import TagList from "./TagList";
import moment from "moment";
import logo from "../../logo.svg";

export default function Job(props: any) {
  let {
    id,
    url,
    title,
    company_name,
    publication_date,
    salary="Negotiable",
    description,
    tags,
  } = props;
  if (salary == "") salary="Negotiable"
  const logoURL= 'https://remotive.io/job/' + id + '/logo'
  //tách HTML
  function extractContent(desc:string) {
    var span = document.createElement('span');
    span.innerHTML = desc;
    return span.textContent || span.innerText;
  };

  return (
    <div className="border text-left my-3 job-card">
      <div className="row">
        <div className="col-sm-2 pl-4 pt-2">
          <img src={logoURL} alt={"logo công ty"+ company_name} />
          <div className="text-center"><strong>{company_name}</strong></div>
        </div>
        <div className="col-sm-10 pr-5">
          <div className="row">
            <div className="title col-sm-10"><a href={url}>{title}</a> </div>
            <div className="col-sm-2">{moment(publication_date).fromNow()}</div>
          </div>
          <div>Salary: {salary}</div>
          <div className="pt-2">{extractContent(description).slice(0, 600)+'...'}</div>
          <div>
            {" "}
            <TagList tagList={tags} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
