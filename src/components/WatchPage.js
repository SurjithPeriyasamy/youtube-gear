import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import SuggestVideos from "./SuggestVideos";
import { useVideosApi } from "../utils/useVideosApi";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { WATCH_VIDEO_API } from "../utils/constants";
import Body from "./Body";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const param = searchParams.get("v");

  const [watchVideo, setWatchVideo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getWatchVideo();
    dispatch(closeMenu());
  }, [param]);

  const getWatchVideo = async () => {
    const data = await fetch(WATCH_VIDEO_API + param);
    const json = await data.json();
    setWatchVideo(json.items[0]);
  };

  const suggestionVideos = useVideosApi();

  if (watchVideo === null) {
    return <div></div>;
  }

  const { title, channelTitle, thumbnails } = watchVideo.snippet;

  return (
    <div className="w-full px-3 my-2">
      <div className="flex w-full flex-wrap lg:flex-nowrap">
        <div className="w-full">
          <iframe
            className="w-full aspect-video "
            src={"https://www.youtube.com/embed/" + param}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoPlay
          ></iframe>
          <div className="font-semibold my-2">
            <h1 className="text-xl mb-4">{title}</h1>
            <div className="flex gap-2">
              <img
                className="rounded-full h-9 w-9"
                alt="channel"
                src={thumbnails.default.url}
              />
              <h2 className="text-lg flex gap-1 items-center">
                <span>{channelTitle}</span>
                <span>
                  <img
                    className="h-3 "
                    alt="verify"
                    src="https://img.freepik.com/free-icon/check-mark_318-82621.jpg?t=st=1692436411~exp=1692437011~hmac=0352088f7f284ddd21db2ec79f73b4ac6eb439443d1d1090121ec3f7f2c371ce"
                  />
                </span>
              </h2>
            </div>
          </div>
          <CommentsContainer videoId={param} />
        </div>
        <div className="lg:basis-1/2 px-2 flex flex-col">
          <LiveChat />
          <div className="flex flex-col border border-gray-200 shadow-lg">
            {suggestionVideos.map((video) => (
              <Link
                to={"/watch?v=" + video.id}
                className="my-2 p-1 w-full"
                key={video.id}
              >
                <SuggestVideos info={video} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
