import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div>
      <img
        alt="thumbnail"
        className="w-full rounded-lg "
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-800 text-sm font-medium flex items-center gap-1">
          <img
            alt="thumbnail"
            className="h-6 w-6 rounded-full"
            src={thumbnails.medium.url}
          />
          <div>
            {channelTitle}
            <div className=" text-gray-600 text-xs font-medium">
              {statistics.viewCount / 1000}K Views
            </div>
          </div>
        </li>
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
