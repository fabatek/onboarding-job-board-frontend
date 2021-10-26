import React from "react";
import './Search.scss'
const Search = () => {
    return (
        <div className="search__container">
            <div className="search">
                <div className="search__input">
                    <i className="search__input-icon fas fa-search"></i>
                    <input
                        className="search__input-input"
                        type="text"
                        placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty,..."
                    />
                    <i className="search__input-icon fas fa-times"></i>
                </div>
                <div className="search__location">
                    <i className="search__location-icon fas fa-map-marker-alt"></i>
                    <div>Thành phố</div>
                </div>
                <button className="search__button">
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}

export default Search;
