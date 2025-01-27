import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Anh</h1>
        <p className="w-[320px]"></p>
        <p>702 Quốc lộ 13 Phường Hiệp Bình Phước TP.Thủ Đức Tp.HCM</p>
        <p>
          <strong>Mobile: </strong>0939064052
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
