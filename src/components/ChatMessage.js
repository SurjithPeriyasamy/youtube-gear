import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { DEFAULT_PROFILE, USER_PROFILE } from "../utils/constants";

const ChatMessage = ({ name, text }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex items-center gap-x-3 p-2 bg-gray-200 rounded-lg">
      <div>
        <img
          className="h-6"
          alt="commentProfile"
          src={name === loggedInUser.name ? USER_PROFILE : DEFAULT_PROFILE}
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
