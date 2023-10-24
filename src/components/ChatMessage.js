import React from "react";
import { DEFAULT_PROFILE } from "../utils/constants";

const ChatMessage = ({ name, text, user }) => {
  return (
    <div className="flex items-center gap-x-3 p-2 bg-gray-200 rounded-lg">
      <div>
        <img
          className="h-6"
          alt="commentProfile"
          src={
            user
              ? name === user.name
                ? user.profile
                : DEFAULT_PROFILE
              : DEFAULT_PROFILE
          }
        />
      </div>
      <div>
        <span className="font-semibold text-base pr-3"> {name}</span>
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
