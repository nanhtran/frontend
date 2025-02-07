import { Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import PersonalDetails from "./PersonalDetails";
import PickupAddress from "./PickupAddress";
import BankDetailsFrom from "./BankDetailsFrom";
import BusinessDetails from "./BusinessDetails";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };
  const handleClose = () => setOpen(false);
  const [selectedForm, setSelectedForm] = useState("personalDetails");
  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetails />;
      case "businessDetail":
        return <BusinessDetails />;
      case "pickupAddress":
        return <PickupAddress />;
      default:
        return <BankDetailsFrom />;
    }
  };

  return (
    <div className="lg:p-20 pt-3 pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("personalDetails")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://i.pinimg.com/736x/20/5a/c8/205ac833d83d23c76ccb74f591cb6000.jpg"
          />
          <div>
            <ProfileFieldCard keys="Seller Name" value={"Ngoc Anh"} />
            <Divider />
            <ProfileFieldCard
              keys="Seller Email"
              value={"nanhtran91@gmail.com"}
            />
            <Divider />
            <ProfileFieldCard keys="Seller Mobile" value={"1234567899"} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Business Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("businessDetail")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard
              keys="Business Name/Brand Name"
              value={"Ngoc Anh Clothing"}
            />
            <Divider />
            <ProfileFieldCard keys="GSTIN" value={"GSTIN3447633"} />
            <Divider />
            <ProfileFieldCard keys="Account Status" value={"PENDING"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Pickup Address</h1>
          <div>
            <Button
              onClick={() => handleOpen("pickupAddress")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="">
            <ProfileFieldCard keys={"Address"} value={"702 Quoc Lo 13"} />
            <Divider />
            <ProfileFieldCard
              keys={"City"}
              value={"TP.Thu Duc"}
              // chinh sua dia chi
            />
            <Divider />
            <ProfileFieldCard keys={"State"} value={"TP.HCM"} />
            <Divider />
            <ProfileFieldCard keys={"Mobile"} value={"1234567899"} />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Bank Details</h1>
          <div>
            <Button
              onClick={() => handleOpen("bankDetail")}
              variant="contained"
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              className="w-16 h-16"
            >
              <Edit />
            </Button>
          </div>
        </div>
        <div>
          <div>
            <ProfileFieldCard keys="Account Holder Name" value={"Ngoc Anh"} />
            <Divider />
            <ProfileFieldCard keys="Account Number" value={"345343447633"} />
            <Divider />
            <ProfileFieldCard keys="SWIFT CODE" value={"YES834"} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
    </div>
    // 2h15
  );
};

export default Profile;
