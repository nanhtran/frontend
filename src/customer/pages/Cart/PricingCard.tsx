import { Divider } from "@mui/material";
import React from "react";

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>899.000VND</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>699.000VND</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>30.000VND</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Platform</span>
          <span>free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Total</span>
        <span>500.000VND</span>
      </div>
    </>
  );
};

export default PricingCard;
