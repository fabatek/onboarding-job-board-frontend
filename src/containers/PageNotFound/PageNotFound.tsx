import React from "react";
import { Button } from "../../assets/styles/style";

type Props = {};

const PageNotFound = (props: Props) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 404-page">
      <div className="text-center 404-page__content">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Button type="primary" href="/">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
