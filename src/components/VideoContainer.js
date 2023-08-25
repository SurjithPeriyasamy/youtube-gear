import VideoCard, { withHighLikes } from "./VideoCard";
import { Link } from "react-router-dom";
import { useVideosApi } from "../utils/useVideosApi";
import ShimmerUi from "./ShimmerUi";

const VideoContainer = () => {
  const videos = useVideosApi();

  const HighLikesCard = withHighLikes(VideoCard);
  return videos.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="flex justify-center lg:justify-stretch flex-wrap">
      {videos.map((video) => {
        return (
          <Link
            className=" hover:shadow-[0_0_5px_0_gray] w-64 m-2 p-2 mr-2 shadow-lg rounded-lg"
            to={"/watch?v=" + video.id}
            key={video.id}
          >
            {video.statistics.likeCount > 20000 ? (
              <HighLikesCard info={video} />
            ) : (
              <VideoCard info={video} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
