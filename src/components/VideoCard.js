import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div>
      <img
        alt="thumbnail"
        className="w-full rounded-lg "
        src={thumbnails.medium.url}
      />
      <ul className="flex flex-col justify-between">
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-800 text-sm  ">{channelTitle}</li>
        <li className="text-gray-800 text-sm ">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const withHighLikes = (VideoCard) => {
  return ({ info }) => {
    const { statistics } = info;
    return (
      <div>
        <label className="absolute bg-yellow-300 p-2 rounded-lg z-0 font-bold text-black">
          ❤️ {statistics.likeCount}K Likes
        </label>
        <VideoCard info={info} />
      </div>
    );
  };
};

export default VideoCard;
