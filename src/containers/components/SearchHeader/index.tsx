import React, { FC, useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "../../hooks/useTypeSelector";
import { jobActions } from "../../store";
import { BsSearch, BsXLg, BsGeoAlt } from "react-icons/bs";

export const SearchHeader: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, []);
  const { total, jobs } = useSelector((state) => state.jobs);
  return (
    <div className="search-header ">
      <div className="search-header__content row">
        <div className="col-12">
          <h1>{total} Việc Làm IT Cho Developer Chất</h1>
          <div className="search-header__content__from row ">
            <div className="search-header__content__from__keyword  col-7">
              <BsSearch />
              <input
                type="text"
                placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty..."
              />
              <BsXLg style={{ cursor: "pointer" }} />
            </div>
            <div className="search-header__content__from__city col-2">
              <div className="" style={{ width: "100%", height: "100%" }}>
                <BsGeoAlt />
                <select>
                  <option>Địa Điểm</option>
                  <option>HCM</option>
                  <option>Đà Nẳng</option>
                </select>
              </div>
            </div>
            <div className="search-header__content__from__submit col-2">
              <button>Tìm Kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
