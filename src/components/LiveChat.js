import React, { useContext, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import UserContext from "../utils/UserContext";
import { USER_PROFILE, DEFAULT_PROFILE } from "../utils/constants";

const LiveChat = () => {
  const [sendMessage, setSendMessage] = useState("");

  const [error, setError] = useState(false);

  const { loggedInUser, showUser } = useContext(UserContext);

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //Api Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(23) + " 🏋️‍♂️",
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" mb-4 bg-gray-100 flex flex-col items-center shadow-lg rounded-lg">
      <div className="w-full shadow-lg rounded-lg  overflow-y-scroll h-[500px]  flex flex-col-reverse">
        {ChatMessages.map((cm, i) => (
          <ChatMessage key={i} name={cm.name} text={cm.message} />
        ))}
      </div>
      <div className="my-1 w-full py-2 px-4">
        <div className="flex gap-3 my-1 items-center">
          <img
            className="rounded-full h-8"
            alt="profile"
            src={loggedInUser.name ? USER_PROFILE : DEFAULT_PROFILE}
          />
          <div className="font-semibold text-gray-500">
            {!showUser ? "Please Log In buddy 🤷‍♂️" : loggedInUser.name}
          </div>
        </div>
        <form
          className=" flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage !== "" &&
              showUser &&
              dispatch(
                addMessage({
                  name: loggedInUser.name,
                  message: sendMessage,
                })
              );

            setSendMessage("");
            sendMessage === "" ? setError(true) : setError(false);
          }}
        >
          <input
            className=" w-4/5 bg-transparent placeholder:text-sm placeholder:font-semibold border border-x-0 border-t-0  border-b-gray-400 outline-0 focus:border-b-blue-600 duration-700"
            type="text"
            placeholder="Say something..."
            value={showUser ? sendMessage : ""}
            onChange={(e) =>
              showUser ? setSendMessage(e.target.value) : setSendMessage("")
            }
          />
          {error && (
            <div className="text-red-600 text-xs">Enter valid Message</div>
          )}
          <button className=" mr-10 mt-2 p-2 hover:bg-blue-300 rounded-lg self-end">
            <img
              className="h-5"
              alt="sendMessage"
              src="https://cdn-icons-png.flaticon.com/512/803/803503.png?w=740&t=st=1691995439~exp=1691996039~hmac=06f4250c3f0d3a9c1069250189cda96fc3a6e17ddaae3c4571c19767d71b9f31"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
