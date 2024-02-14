import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import SuggestVideos from "./SuggestVideos";
import { useVideosApi } from "../utils/useVideosApi";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { WATCH_VIDEO_API } from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const WatchPage = () => {
  const [isLike, setIsLike] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [searchParams] = useSearchParams();

  const param = searchParams.get("v");

  const [watchVideo, setWatchVideo] = useState(null);

  const user = useSelector((store) => store.user.loginUser);

  const dispatch = useDispatch();

  useEffect(() => {
    getWatchVideo();
    setIsLike("");
    setIsSubscribe(false);
    window.scrollTo(0, 0);
  }, [param]);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const getWatchVideo = async () => {
    const data = await fetch(WATCH_VIDEO_API + param);
    const json = await data.json();
    setWatchVideo(json.items[0]);
  };

  const suggestionVideos = useVideosApi();

  if (!watchVideo) {
    return <div>Nothing can get Details</div>;
  }

  const { title, channelTitle, thumbnails } = watchVideo?.snippet;
  const { likeCount, viewCount } = watchVideo?.statistics;

  return (
    <div className="w-full px-3 my-2">
      {watchVideo && (
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <iframe
              className="w-full aspect-video rounded-2xl"
              src={"https://www.youtube.com/embed/" + param + "?autoplay=1"}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              autoPlay
            ></iframe>
            <div className="font-semibold my-2">
              <h1 className="text-xl mb-4">{title}</h1>
              <div className="flex gap-2 pr-10">
                <img
                  className="rounded-full h-9 w-9"
                  alt="channel"
                  src={thumbnails.default.url}
                />
                <div className="flex gap-1 items-center w-fit">
                  <span>{channelTitle}</span>
                  <span>
                    <img
                      className="h-3 w-3"
                      alt="verify"
                      src="https://img.freepik.com/free-icon/check-mark_318-82621.jpg?t=st=1692436411~exp=1692437011~hmac=0352088f7f284ddd21db2ec79f73b4ac6eb439443d1d1090121ec3f7f2c371ce"
                    />
                  </span>
                </div>
                <button
                  onClick={() => setIsSubscribe(!isSubscribe)}
                  className="py-2 h-fit mx-4 px-4 bg-gray-800 text-sm text-white rounded-full"
                >
                  {isSubscribe ? (
                    <span className="flex items-center gap-1">
                      Subscribed{" "}
                      <img
                        className="h-3 w-3 rounded-full bg-transparent"
                        alt="verify"
                        src="https://img.freepik.com/free-icon/check-mark_318-82621.jpg?t=st=1692436411~exp=1692437011~hmac=0352088f7f284ddd21db2ec79f73b4ac6eb439443d1d1090121ec3f7f2c371ce"
                      />
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
                <div className="text-lg flex gap-5 ml-auto items-center w-fit">
                  <div className="flex gap-2 bg-gray-300 p-2 rounded-full text-sm items-center">
                    <FaUsersViewfinder size={20} />
                    {(viewCount / 1000).toFixed()}K views
                  </div>
                  <div className="flex items-center gap-4 bg-gray-300 p-2 rounded-full">
                    <span
                      onClick={() => {
                        if (isLike === "dislike" || isLike === "") {
                          setIsLike("like");
                        } else if (isLike === "like") {
                          setIsLike("");
                        }
                      }}
                      className="cursor-pointer flex gap-2 text-sm items-center border-r-2 border-gray-500 pr-3"
                    >
                      {isLike === "like" ? (
                        <BiSolidLike size={20} />
                      ) : (
                        <BiLike size={20} />
                      )}{" "}
                      {(likeCount / 1000).toFixed()}K
                    </span>
                    <span
                      className="cursor-pointer flex items-center gap-1 text-sm"
                      onClick={() => {
                        if (isLike === "like" || isLike === "") {
                          setIsLike("dislike");
                        } else if (isLike === "dislike") {
                          setIsLike("");
                        }
                      }}
                    >
                      {isLike === "dislike" ? (
                        <>
                          <BiSolidDislike size={20} /> 1
                        </>
                      ) : (
                        <BiDislike size={20} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <CommentsContainer videoId={param} />
          </div>
          <div className="lg:basis-1/2 px-2 flex flex-col">
            <LiveChat user={user} />
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
      )}
    </div>
  );
};

export default WatchPage;
