import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterTitleJob } from "../../../redux/actions/JobsAction";
import { RootStore } from "../../../utils/TypeScripts";
import './Search.scss'

const Search = () => {
    const jobs = useSelector((state:RootStore)=>state.jobs)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(filterTitleJob(value,jobs))
    }
    return (
        <div className="search__container">
            <div className="search">
                <div className="search__input">
                    <i className="search__input-icon fas fa-search"></i>
                    <input
                        className="search__input-input"
                        type="text"
                        placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty,..."
                        value={value}
                        name={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <i className="search__input-icon fas fa-times"></i>
                </div>
                <div className="search__location">
                    <i className="search__location-icon fas fa-map-marker-alt"></i>
                    <div>Thành phố</div>
                </div>
                <button
                    className="search__button"
                    onClick={() =>onSubmit()}>
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}

export default Search;
