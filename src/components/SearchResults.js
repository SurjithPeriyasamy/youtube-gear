import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { SEARCH_RESULT_API } from "../utils/constants";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();

  const params = searchParams.get("search_query");

  useEffect(() => {
    getSearchVideos();
  }, [params]);

  const getSearchVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + params);
    const json = await data.json();
    setVideos(json.items);
  };
  if (videos.length === 0) return <ShimmerUi />;
  return (
    <div className="flex flex-col m-auto">
      {videos.map((video) => (
        <Link
          className="m-2 p-2 mr-2 shadow-lg rounded-lg"
          key={video.id.videoId}
          to={"/watch?v=" + video.id.videoId}
        >
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
