import React from "react";

const Message = () => {
  return (
    <div>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2`}
      >
        {/* {message.message} */}Hey Good Morning
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* {formattedTime} */}00:00
      </div>
    </div>
  );
};

export default Message;
