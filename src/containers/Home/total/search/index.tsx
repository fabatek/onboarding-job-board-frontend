import * as React from "react";
import { useDispatch } from "react-redux";
import { searchTitleJob } from "../../../Redux/Action";

type Props = {};
const Index: React.FC = (props: Props) => {
  const dispatch = useDispatch(); //dispatch
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(searchTitleJob(value));
  };
  return (
    <div className="input-group flex-nowrap header__search">
      <span className="input-group-text" id="addon-wrapping">
        press title jobs
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Title Job"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={onChange}
      />
    </div>
  );
};
export default Index;
