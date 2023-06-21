import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Sidebar, Navbar } from "../components/Application";
import { useStateContext } from "../context";
import {
  CountBox,
  CustomButton,
  Loader,
  Notification,
} from "../components/Application";
import { calculateBarPercentage, daysLeft, hoursLeft } from "../utils";
import { thirdweb } from "../assets";
import { useAddress } from "@thirdweb-dev/react";
import { useSwitchChain } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
const CampaignDetails = () => {
  const switchChain = useSwitchChain();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address, ClaimTokens } =
    useStateContext();
  const [showNotification, setShowNotification] = useState(false); // create state for notification
  const [notificationMessage, setNotificationMessage] = useState("");
  const user = useAddress();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);
  const remainingHours = hoursLeft(state.deadline);
  const fetchDonators = async () => {
    const allDonations = await getDonations();
    const campaignDonations = allDonations.filter(
      (donation) => donation.campaignId.toString() === state.pId.toString()
    );

    setDonators(campaignDonations);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address, state.pId]);

  const handleDonate = async () => {
    if (user) {
      try {
        await switchChain(Sepolia.chainId);
        setIsLoading(true);
        await donate(state.pId, amount);
        setIsLoading(false);
        setShowNotification(true);
        setNotificationMessage("Donation completed successfully!"); // Set success message

        setTimeout(() => {
          setShowNotification(flase);
        }, 3000); // Delay in milliseconds, 3000ms = 3s
      } catch (err) {
        // if an error occurs, display notification
        setShowNotification(true);
        setIsLoading(false);
        setTimeout(() => {
          setShowNotification(flase);
        }, 3000); // Delay in milliseconds, 3000ms = 3s

        // Try to extract the error reason from the error string
        let errMsg = "Error. Please try again later."; // Default error message
        const errorParts = String(err).split("Reason:");
        if (errorParts.length > 1) {
          let extractedMsg = errorParts[1].split(".")[0].trim() + "."; // Get string after 'Reason:' and before '.', then add '.' back to the end

          // If the extracted message isn't empty, set it as the error message
          if (extractedMsg.trim() !== ".") {
            errMsg = extractedMsg;
          }
        }

        setNotificationMessage(errMsg); // Set error message
      }
    } else {
      setShowNotification(true);
      setNotificationMessage("Please Connect Your Wallet to Continue"); // Set success message

      setTimeout(() => {
        setShowNotification(flase);
      }, 3000); // Delay in milliseconds, 3000ms = 3s
      navigate("/app");
    }
  };

  const handleclaim = async () => {
    if (user) {
      try {
        await switchChain(Sepolia.chainId);
        setIsLoading(true);
        await ClaimTokens(state.pId);
        setIsLoading(false);
        setShowNotification(true);
        setNotificationMessage("Claim completed successfully!"); // Set success message
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 3000); // Delay in milliseconds, 3000ms = 3s
        navigate("/app");
      } catch (err) {
        // if an error occurs, display notification
        setShowNotification(true);
        setIsLoading(false);

        // Try to extract the error reason from the error string
        let errMsg = "Error. Please try again later."; // Default error message
        const errorParts = String(err).split("Reason:");
        if (errorParts.length > 1) {
          let extractedMsg = errorParts[1].split(".")[0].trim() + "."; // Get string after 'Reason:' and before '.', then add '.' back to the end

          // If the extracted message isn't empty, set it as the error message
          if (extractedMsg.trim() !== ".") {
            errMsg = extractedMsg;
          }
        }

        setNotificationMessage(errMsg); // Set error message
      }
    } else {
      setShowNotification(true);
      setNotificationMessage("Please Connect Your Wallet to Continue"); // Set success message

      setTimeout(() => {
        setShowNotification(flase);
      }, 3000); // Delay in milliseconds, 3000ms = 3s
    }
  };

  return (
    <div className="relative sm:-8 p-4 bg-white min-h-screen flex flex-row">
      {showNotification && <Notification message={notificationMessage} />}
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <div>
          {isLoading && <Loader />}

          <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
            <div className="flex-1 flex-col">
              <img
                src={state.image}
                alt="campaign"
                className="w-full h-[410px] object-cover rounded-xl"
              />
              <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
                <div
                  className="absolute h-full bg-[#99EDCC]"
                  style={{
                    width: `${calculateBarPercentage(
                      state.target,
                      state.amountCollected
                    )}%`,
                    maxWidth: "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
              <CountBox
                title="Days Left"
                value={remainingDays < 0 ? "Ended" : remainingDays}
              />
              {/* <CountBox
                title="Time Left"
                value={
                  remainingDays < 2
                    ? `${remainingHours} hours`
                    : remainingDays <= 0
                    ? "Ended"
                    : `${remainingDays} days`
                }
              /> */}

              <CountBox
                title={`Raised of ${state.target}`}
                value={state.amountCollected}
              />
              <CountBox title="Total Backers" value={donators.length} />
            </div>
          </div>

          <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
            <div className="flex-[2] flex flex-col gap-[40px]">
              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Creator
                </h4>

                <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                  <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                    <img
                      src={thirdweb}
                      alt="user"
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-epilogue font-semibold text-[14px]  text-black break-all">
                      {state.owner}
                    </h4>
                    <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                      10 Campaigns
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Story
                </h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px] text-black leading-[26px] text-justify">
                    {state.description}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[18px]  text-black uppercase">
                  Tokens Left
                </h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] text-justify">
                    {state.TokenAmount}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[18px]  text-black uppercase">
                  Total Number of Tokens
                </h4>
                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px] text-black leading-[26px] text-justify">
                    {Number(state.target) / Number(state.TokenPrice)}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[18px]  text-black uppercase">
                  Token Price
                </h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] text-justify">
                    {state.TokenPrice} ETH
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[18px]  text-black uppercase">
                  Category
                </h4>

                <div className="mt-[20px]">
                  <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] text-justify">
                    {state.category}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
                  Donators
                </h4>

                <div className="mt-[20px] flex flex-col gap-4">
                  {/* {donators.length > 0 ? (
                    donators.map((item, index) => (
                      <div
                        key={`${item.donator}-${index}`}
                        className="flex justify-between items-center gap-4"
                      >
                        <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] break-ll">
                          {index + 1}. {item.donator}
                        </p>
                        <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] break-ll">
                          {item.donation}
                        </p>
                      </div>
                    ))
                  ) : ( */}

                  {donators.length > 0 ? (
                    donators
                      .sort((a, b) => b.donation - a.donation) // sort in descending order
                      .map((item, index) => (
                        <div
                          key={`${item.donator}-${index}`}
                          className="flex justify-between items-center gap-4"
                        >
                          <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] break-ll">
                            {index + 1}. {item.donator}
                          </p>
                          <p className="font-epilogue font-normal text-[16px]  text-black leading-[26px] break-ll">
                            {item.donation}
                          </p>
                        </div>
                      ))
                  ) : (
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify ">
                      No donators yet. Be the first one!
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
                Fund
              </h4>

              <div className="mt-[20px] flex flex-col p-4 bg-gray-200 rounded-[10px]">
                <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#030303]">
                  Fund the campaign
                </p>
                <div className="mt-[30px]">
                  <input
                    type="number"
                    placeholder="ETH 0.001"
                    min="0.001"
                    step="0.001"
                    max={state.target - state.amountCollected}
                    className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                    value={amount}
                    onChange={(e) => {
                      let inputValue = e.target.value;
                      if (inputValue > state.target - state.amountCollected) {
                        inputValue = state.target - state.amountCollected;
                      }
                      setAmount(inputValue);
                    }}
                  />

                  <div className="my-[20px] p-4 bg-gray-400 rounded-[10px]">
                    <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                      Back it because you believe in it.
                    </h4>
                    <p className="mt-[20px] font-epilogue font-normal  text-[14px] leading-[22px] text-black">
                      Support the project for reward, just because it speaks to
                      you.
                    </p>
                  </div>

                  <CustomButton
                    btnType="button"
                    title="Fund Campaign"
                    styles="w-full bg-[#99EDCC]"
                    handleClick={handleDonate}
                  />
                </div>
              </div>
              <div className="mt-[20px] flex flex-col p-4 bg-[52489C] rounded-[10px]">
                <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#000000]">
                  Claim your Tokens
                </p>
                <div className="py-5">
                  <CustomButton
                    btnType="button"
                    title="Claim Tokens"
                    styles="w-full bg-[#99EDCC]"
                    handleClick={handleclaim}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
