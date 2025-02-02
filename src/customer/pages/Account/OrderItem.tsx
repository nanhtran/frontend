import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon,15 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_qO1Lx1B-e4LXPR3FhbZcPsFRb5hF5uVXA&s"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Huawei Watch GT5</h1>
          <p>
            Thiết kế sang trọng, màn AMOLED 1.43 inch, pin lâu 14 ngày, hỗ trợ
            100+ môn thể thao, đo sức khỏe, giấc ngủ, chống nước IP69K, GPS
            chính xác.
          </p>
          <strong>Size: </strong>
          Free
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
