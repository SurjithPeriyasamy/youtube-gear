import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="flex select-none flex-col justify-between h-full">
      <div>
        <img
          alt="thumbnail"
          className="w-full rounded-lg "
          src={thumbnails.medium.url}
        />
        <p className="font-semibold text-sm truncate py-2">{title}</p>
      </div>

      <div className="text-gray-800 text-sm font-medium flex items-center gap-1">
        <img
          alt="thumbnail"
          className="h-6 w-6 rounded-full"
          src={thumbnails.medium.url}
        />
        <div>
          {channelTitle}
          <div className=" text-gray-600 text-xs font-medium">
            {(statistics.viewCount / 1000).toFixed()}K Views
          </div>
        </div>
      </div>
    </div>
  );
};

export const withHighLikes = (VideoCard) => {
  return ({ info }) => {
    return (
      <>
        <label className="select-none absolute bg-yellow-300 p-2 rounded-lg z-0 text-sm font-bold text-black">
          High ❤️
        </label>
        <VideoCard info={info} />
      </>
    );
  };
};

export default VideoCard;
