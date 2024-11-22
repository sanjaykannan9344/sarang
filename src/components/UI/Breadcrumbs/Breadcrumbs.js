import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div>
      <div className="breadcrumb flat text-center -z-30">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {breadcrumb.url ? (
              <Link>{breadcrumb.text}</Link>
            ) : (
              <Link className="active">{breadcrumb.text}</Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
