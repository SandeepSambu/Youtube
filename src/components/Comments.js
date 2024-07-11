import React from "react";

const Comments = ({ comment, index }) => {
  return (
    <div key={index} className="my-5 flex">
      <div>
        <img
          className="rounded-full mr-5 w-[40px]"
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="ProfilePic"
        />
      </div>
      <div>
        <h1 className="font-bold">
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </h1>
        <h2>{comment.snippet.topLevelComment.snippet.textDisplay}</h2>
      </div>
    </div>
  );
};

export default Comments;
