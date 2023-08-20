import React from "react";
import { useEffect, useState } from "react";
import { COMMENT_API } from "../utils/constants";

const Comment = ({ data }) => {
  const { textDisplay, authorDisplayName, authorProfileImageUrl } =
    data?.snippet?.topLevelComment?.snippet || data?.snippet;

  return (
    <div className="my-3 flex items-center gap-3 p-1 rounded-lg">
      <div>
        <img
          className=" rounded-full"
          alt="commentProfile"
          src={authorProfileImageUrl}
        />
      </div>
      <div>
        <p className="font-semibold text-sm">@{authorDisplayName}</p>
        <p className="text-xs">{textDisplay}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments, i }) => {
  return comments.map((comment, index) => (
    <div key={comment.id}>
      <Comment data={comment} />
      {comment.replies && (
        <div className="ml-10 my-2 pl-3 border border-l-gray-500 border-white">
          <div className="cursor-pointer font-medium text-blue-600">
            Replies ({comment.replies.comments.length}) ⬇
          </div>

          <CommentsList i={index} comments={comment.replies.comments} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = ({ videoId }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, [videoId]);

  const getCommentsData = async () => {
    const data = await fetch(COMMENT_API + videoId);
    const json = await data.json();
    setCommentsData(json.items);
  };
  return (
    <div>
      <h1 className="font-bold m-1 text-lg">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
