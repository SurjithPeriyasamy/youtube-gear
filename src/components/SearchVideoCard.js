import React from "react";

const SearchVideoCard = ({ info }) => {
  const { channelTitle, thumbnails, title } = info.snippet;
  return (
    <div className="flex flex-wrap">
      <img
        alt="thumbnail"
        className="mr-3 w-60 rounded-lg "
        src={thumbnails.medium.url}
      />
      <ul className="flex flex-col justify-between">
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-800 text-sm  ">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SearchVideoCard;
