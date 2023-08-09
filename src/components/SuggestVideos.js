import React from "react";

const SuggestVideos = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="flex m-2 p-4">
      <img
        alt="suggest"
        className="mx-2 w-60 rounded-lg"
        src={thumbnails.medium.url}
      />
      <ul className="flex flex-col justify-between">
        <li className="font-bold text-sm">{title}</li>
        <li className="font-normal text-">{channelTitle}</li>
        <li className="font-normal">{statistics.viewCount}K Views</li>
      </ul>
    </div>
  );
};

export default SuggestVideos;
