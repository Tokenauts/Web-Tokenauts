import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x39Da251323269Ed47dDD684ec3Ff7bfBB67113C5"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await contract.call("createCampaign", [
        address, // owner
        form.TokenAddress, //contract ERC20 address
        form.TokenAmount,
        form.title, // title
        form.description, // description
        form.category, // category
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.TokenPrice,
        form.image,
      ]);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const numberOfCampaigns = await contract.call("numberOfCampaigns");
    const campaigns = [];

    for (let i = 0; i < numberOfCampaigns; i++) {
      const campaign = await contract.call("getCampaign", [i]);

      campaigns.push({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        category: campaign.category, // category
        TokenAddress: campaign.TokenAddress,
        TokenAmount: ethers.utils.formatEther(campaign.tokenBalance.toString()),
        TokenPrice: ethers.utils.formatEther(campaign.tokenPrice.toString()),
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber() * 1000,
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        image: campaign.image,
        pId: i,
      });
    }

    return campaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  const ClaimTokens = async (pId) => {
    const claim = await contract.call("claimTokens", [pId]);
    return claim;
  };

  const getDonations = async () => {
    const donations = await contract.events.getEvents("DonationReceived");

    const parsedDonations = donations
      .map((donation) => {
        if (
          !donation.data ||
          !donation.data.campaignId ||
          !donation.data.donor ||
          !donation.data.amount
        ) {
          console.error("Invalid donation event:");
          return null;
        }

        return {
          campaignId: donation.data.campaignId.toString(),
          donator: donation.data.donor,
          donation: ethers.utils.formatEther(donation.data.amount.toString()),
        };
      })
      .filter((donation) => donation !== null);

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        ClaimTokens,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
