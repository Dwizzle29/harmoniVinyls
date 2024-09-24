// Breadcrumb.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the pathname into segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Build the breadcrumbs array

  const labelMapping = {
    shop: "Products",
    // Add a default label for dynamic IDs or handle conditionally
  };

  // Check if the segment is a number (assuming that's an imageId)
  const isNumeric = (segment) => /^\d+$/.test(segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label =
      labelMapping[segment] ||
      (isNumeric(segment)
        ? "Image Name"
        : segment.charAt(0).toUpperCase() + segment.slice(1));
    return {
      label,
      path,
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
