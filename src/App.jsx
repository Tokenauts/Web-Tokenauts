import React from "react";
import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components/Application";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Homepage,
  Claimpage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/app" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-campaign" element={<CreateCampaign />} />
      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
      <Route path="/claim-page/:id" element={<Claimpage />} />
    </Routes>
  );
};

export default App;
