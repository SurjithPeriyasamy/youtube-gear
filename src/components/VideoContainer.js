import VideoCard, { withHighLikes } from "./VideoCard";
import { Link } from "react-router-dom";
import { useVideosApi } from "../utils/useVideosApi";

const VideoContainer = () => {
  const videos = useVideosApi();

  const HighLikesCard = withHighLikes(VideoCard);
  return (
    <div className="flex flex-wrap relative z-0">
      {videos.map((video) => (
        <Link
          className=" w-64 m-2 p-2 mr-2 shadow-lg rounded-lg"
          to={"/watch?v=" + video.id}
          key={video.id}
        >
          {video.statistics.likeCount > 20000 ? (
            <HighLikesCard info={video} />
          ) : (
            <VideoCard info={video} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
