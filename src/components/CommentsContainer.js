import React from "react";

const commentsData = [
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [
      {
        name: "Surjith P",
        commentText: "Hai Hello Brother",
        replies: [
          {
            name: "Surjith P",
            commentText: "Hai Hello Brother",
            replies: [
              {
                name: "Surjith P",
                commentText: "Hai Hello Brother",
                replies: [
                  {
                    name: "Surjith P",
                    commentText: "Hai Hello Brother",
                    replies: [],
                  },
                ],
              },
              {
                name: "Surjith P",
                commentText: "Hai Hello Brother",
                replies: [],
              },
              {
                name: "Surjith P",
                commentText: "Hai Hello Brother",
                replies: [],
              },
            ],
          },
          {
            name: "Surjith P",
            commentText: "Hai Hello Brother",
            replies: [],
          },
        ],
      },
      {
        name: "Surjith P",
        commentText: "Hai Hello Brother",
        replies: [],
      },
    ],
  },
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [],
  },
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [],
  },
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [],
  },
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [],
  },
  {
    name: "Surjith P",
    commentText: "Hai Hello Brother",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, commentText, replies } = data;
  return (
    <div className="flex items-center gap-3 bg-gray-200 p-1 rounded-lg">
      <div>
        <img
          className="h-7"
          alt="commentProfile"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
      <div>
        <p className="font-semibold text-sm"> {name}</p>
        <p className="text-xs">{commentText}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-10 my-2 pl-3 border border-l-gray-500 border-white">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold m-1 text-lg">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
