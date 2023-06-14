import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { Sidebar, Navbar, Steps } from "../components/Application";
import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components/Application";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [showNotification, setShowNotification] = useState(false); // create state for notification

  const [form, setForm] = useState({
    TokenAddress: "",
    TokenAmount: "",
    name: "",
    title: "",
    description: "",
    category: "", // category field
    target: "",
    deadline: "",
    TokenPrice: "",
    image: "",
  });
  const handleFormFieldChange = (field, event) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.category === "") {
      alert("Please select a category");
      return;
    }

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        console.log(form.target, form.TokenAmount, form.TokenPrice); // add this line

        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
          TokenAmount: ethers.utils.parseUnits(form.TokenAmount, 18),
          TokenPrice: ethers.utils.parseUnits(form.TokenPrice, 18),
          deadline: Math.floor(new Date(form.deadline).getTime() / 1000),
        });

        setIsLoading(false);
        navigate("/app");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="relative sm:-8 p-4 bg-white min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Steps />

        <div className="bg-gray-100 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {isLoading && <Loader />}
          <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#99EDCC] rounded-[10px]">
            <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
              Start a Campaign
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-[65px] flex flex-col gap-[30px] "
          >
            <div className="flex flex-wrap gap-[40px] text-black">
              <FormField
                labelName="Your Name *"
                placeholder="John Doe"
                inputType="text"
                value={form.name}
                handleChange={(e) => handleFormFieldChange("name", e)}
              />
              <FormField
                labelName="Campaign Title *"
                placeholder="Write a title"
                inputType="text"
                value={form.title}
                handleChange={(e) => handleFormFieldChange("title", e)}
              />
            </div>

            <FormField
              labelName="Story *"
              placeholder="Write your story"
              isTextArea
              value={form.description}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Campaign Category
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => handleFormFieldChange("category", e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a category</option>
              <option value="Gaming">Gaming</option>
              <option value="Defi">Defi</option>
              <option value="NFT">NFT</option>
            </select>

            <div className="w-full flex justify-start items-center p-4 bg-[#99EDCC] h-[120px] rounded-[10px]">
              <img
                src={money}
                alt="money"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                We are here every step of the way
              </h4>
            </div>

            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Goal *"
                placeholder="ETH 0.50"
                inputType="text"
                value={form.target}
                handleChange={(e) => handleFormFieldChange("target", e)}
              />
              <FormField
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                value={form.deadline}
                handleChange={(e) => handleFormFieldChange("deadline", e)}
              />
            </div>

            <FormField
              labelName="Campaign image *"
              placeholder="Place image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("image", e)}
            />
            <FormField
              labelName="Reward Token Address *"
              placeholder="Enter the reward token address"
              inputType="text"
              value={form.TokenAddress}
              handleChange={(e) => handleFormFieldChange("TokenAddress", e)}
            />
            <FormField
              labelName="Reward Token Amount *"
              placeholder="Enter the reward token amount"
              inputType="number"
              value={form.TokenAmount}
              handleChange={(e) => handleFormFieldChange("TokenAmount", e)}
            />
            <FormField
              labelName="Token price *"
              placeholder="price"
              inputType="number"
              value={form.TokenPrice}
              handleChange={(e) => handleFormFieldChange("TokenPrice", e)}
            />

            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton
                btnType="submit"
                title="Submit new campaign"
                styles="bg-[#1dc071]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
