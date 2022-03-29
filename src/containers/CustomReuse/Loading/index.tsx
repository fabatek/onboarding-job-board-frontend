import { ReactElement } from "react";

const RenderLoading = (): ReactElement => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center py-5 text-dark">
        <div className="spinner-border" role="status"></div>
        <span className="px-2 fs-6 fw-normal">Loading...</span>
      </div>
    </>
  );
};
export default RenderLoading;
