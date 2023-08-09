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
    <div className="flex">
      <div>
        <iframe
          width="1000"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
      </div>

      <div className="flex flex-col">
        {suggestionVideos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <SuggestVideos info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
