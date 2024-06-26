import React from "react";
import "./Services.css";
function Services({ name, description, image }) {
  return (
    <div className="services">
      <img className="services-image" src={image} />
      <div className="services-content">
        <h2 className="services-title">{name}</h2>
        <p className="services-desc">{description}</p>
      </div>
    </div>
  );
}

export default Services;
