import React from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { Divider } from "@mui/material";

const UserDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div className="space-y-5">
          <ProfileFieldCard keys="Name" value={"Ngoc Anh"} />
          <Divider />
          <ProfileFieldCard keys="Email" value={"nanhtran91@gmail.com"} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={"1234567898"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
