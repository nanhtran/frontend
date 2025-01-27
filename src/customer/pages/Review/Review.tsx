import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://i.pinimg.com/736x/21/26/c1/2126c17d7b7e8d2647fffa62a69a8ea3.jpg"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Virani Clothing</p>
            <p className="text-lg text-gray-600">Women's White T-Shirt</p>
            <div>
              <div className="price flex items-center gap-3 mt-5 text-2xl">
                <span className="font-sans text-gray-800">300,000 VND</span>
                <span className="line-through text-gray-400">690,000 VND</span>
                <span className="text-primary-color font-semibold">60%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5 w-full">
        {[1, 1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
    // 5h10
  );
};

export default Review;
