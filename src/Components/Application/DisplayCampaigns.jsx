import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FundCard from "./FundCard";
import { loader } from "../../assets";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1 className="font-epilogue font-semibold text-[18px] text-black text-left">
          {title} ({campaigns.length})
        </h1>

        <div className="flex flex-wrap mt-[20px] gap-[26px]">
          {isLoading && (
            <img
              src={loader}
              alt="loader"
              className="w-[100px] h-[100px] object-contain"
            />
          )}

          {!isLoading && campaigns.length === 0 && (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
              You have not created any campigns yet
            </p>
          )}

          {!isLoading &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => (
              <FundCard
                key={campaign.id}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DisplayCampaigns;
