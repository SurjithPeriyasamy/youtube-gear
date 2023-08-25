import React from "react";

const SearchVideoCard = ({ info }) => {
  const { channelTitle, thumbnails, title } = info.snippet;
  return (
    <div className="flex w-56 flex-col md:flex-row md:w-full  ">
      <img
        alt="thumbnail"
        className="mr-3 w-60  rounded-lg "
        src={thumbnails.medium.url}
      />
      <ul className="flex flex-col justify-between flex-wrap">
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-800 text-sm flex items-center font-medium">
          <img
            alt="thumbnail"
            className="mr-3 h-7 w-7 rounded-full "
            src={thumbnails.medium.url}
          />
          {channelTitle}
        </li>
      </ul>
    </div>
  );
};

export default SearchVideoCard;
