import React from "react";
import "./AllPuppies.css";

const AllPuppies = ({ puppies, handleButtonClick }) => {
  return (
    <div className="all-puppies-container">
      {puppies &&
        puppies.map((puppy) => {
          <button
            className="puppy"
            onClick={() => handleButtonClick(puppy)}
            key={puppy.name}
          >
            <img className="small-img" src={puppy.image_url} alt={puppy.name} />

            <p className="puppy-name">{puppy.name} </p>
            <p className="puppy-location">{puppy.location}</p>

            <p className="percent">{beer.breeder}</p>
          </button>;
        })}
    </div>
  );
};

export default AllPuppies;
