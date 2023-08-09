import React from "react";
import Filterbuttons from "./Filterbuttons";
import VideoContainer from "./VideoContainer";

export const MainContainer = () => {
  return (
    <div className="ml-10">
      <Filterbuttons />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
