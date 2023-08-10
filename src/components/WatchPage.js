import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import SuggestVideos from "./SuggestVideos";
import { useVideosApi } from "../utils/useVideosApi";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const suggestionVideos = useVideosApi();

  return (
    <div className="flex w-full flex-wrap lg:flex-nowrap">
      <div className="w-full px-5 my-2">
        <iframe
          className="w-full aspect-video "
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
      </div>
      <div className="lg:basis-1/2 px-5 flex flex-col border border-gray-200 shadow-lg">
        {suggestionVideos.map((video) => (
          <Link to={"/watch?v=" + video.id} className="my-2 p-1" key={video.id}>
            <SuggestVideos info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
