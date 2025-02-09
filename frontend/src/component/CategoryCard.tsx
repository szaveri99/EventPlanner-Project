import React from "react";
import {Link} from 'react-router-dom'
import { ArrowRight } from "react-bootstrap-icons";

const CategoryCard = ({feature, index}) => {
  return (
    <div key={index} className="col-12 col-md-6 col-lg-4 shadow">
      <div className="card h-100 border-0 shadow-lg-hover card-hover-effect">
        <div className="card-body p-4 position-relative">
          <div className="decorative-line"></div>
          <div className="d-flex align-items-center mb-3">
            <div className="icon-wrapper bg-gradient-primary shadow-sm">
              <span className="display-5">{feature.icon}</span>
            </div>
            <h3 className="h5 fw-bold mb-0 ms-3">{feature.title}</h3>
          </div>
          <p className="text-muted mb-4">{feature.description}</p>
          <Link
            to="#"
            className="text-decoration-none d-flex align-items-center text-primary fw-medium hover-arrow"
          >
            Learn More
            <ArrowRight size={18} className="ms-2 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
