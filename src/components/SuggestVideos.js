import React from "react";

const SuggestVideos = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="flex ">
      <img
        alt="suggest"
        className="mr-2 h-24 rounded-lg"
        src={thumbnails.medium.url}
      />
      <ul className="flex text-xs flex-col justify-between">
        <li className="font-bold">{title}</li>
        <li className="font-normal ">{channelTitle}</li>
        <li className="font-normal">{statistics.viewCount}K Views</li>
      </ul>
    </div>
  );
};

export default SuggestVideos;
