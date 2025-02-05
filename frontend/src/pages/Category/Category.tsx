import React from "react";
import { Search, GeoAlt } from "react-bootstrap-icons";
import CategoryCard from "../../component/CategoryCard";
import categoryItems from './CategoryItems';

const Category = () => {
  return (
    <section className="container py-5 " style={{marginTop:'100px'}}>
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6 mb-3 gradient-text">
          From Concept to Celebration,
          <br />
          We’ve Got You Covered
        </h2>
        <p className="text-muted lead">
          Connect with trusted local professionals featuring verified reviews
          and transparent pricing
        </p>
      </div>

      <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
        <div
          className="input-group input-group-lg glassmorphism-effect"
          style={{ maxWidth: "800px" }}
        >
          <span className="input-group-text bg-transparent border-0 ps-4">
            <Search size={20} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-0 py-3"
            placeholder="Search venues, vendors, or planners..."
            aria-label="Search"
          />
          <span className="input-group-text bg-transparent border-0 pe-3">
            <GeoAlt size={20} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-0 py-3"
            placeholder="Location"
            aria-label="Location"
            style={{ maxWidth: "200px" }}
          />
          <button className="btn btn-primary rounded-pill px-4 me-2 my-2">
            Search
          </button>
        </div>
      </div>

      <div className="row g-4">
        {categoryItems.map((feature, index) => (
          <CategoryCard feature={feature} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Category;
