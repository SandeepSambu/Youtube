import React from "react";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center m-2 shadow-md p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwRBD9gNuA2GjcOf6mpL-WuBhJADTWC3QVQ&s"
        alt="profile-pic"
        className="size-10 mx-2"
      />
      <div className="w-[70px]">
        <h1 className="font-bold text-md mr-2">{name}</h1>
      </div>
      <div>
        <h3> {message}</h3>
      </div>
    </div>
  );
};

export default ChatMessages;
