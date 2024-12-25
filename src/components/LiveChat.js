import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { generateName, generateMessage } from "../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chat.chats);
  const [input, setInput] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      const name = generateName();
      const message = generateMessage();
      dispatch(addMessage({ name: name, message: message }));
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="w-full border border-gray-400 rounded-lg px-2 ">
      <div className="h-[490px] overflow-y-scroll flex flex-col-reverse">
        {chats.map((chat) => (
          <ChatMessages name={chat.name} message={chat.message} />
        ))}
      </div>
      <div className="m-2 w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-500 rounded-md w-80 px-2"
        />
        <button
          className="mx-5 bg-slate-200 px-5 rounded-md"
          onClick={() => {
            dispatch(addMessage({ name: "sandeep", message: input }));
            setInput("");
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
