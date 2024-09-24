// Breadcrumb.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the pathname into segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Build the breadcrumbs array

  const labelMapping = {
    product: "Products",
    imageId: "name",
  };

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return {
      label:
        labelMapping[segment] ||
        segment.charAt(0).toUpperCase() + segment.slice(1), // Use mapping if available
      path: path,
    };
  });

  return (
    <div className="breadcrumb">
      <ul>
        <li className="breadcrumb-item">
          <Link to="/">Home </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="breadcrumb-item">
            <span className="separator">/</span>
            <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 && (
              <span className="separator"> </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
