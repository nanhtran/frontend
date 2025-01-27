import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      {" "}
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src={
              "https://i.pinimg.com/474x/84/47/de/8447de264ae520eebc91ed55c18a3b00.jpg"
            }
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Nike</h1>
            <p>Blue Shirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">300,000 VND</span>
            <span className="thin-line-through text-gray-400">690,000 VND</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
