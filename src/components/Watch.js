import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuCollapse, isOpenMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_APIKEY } from "../utils/constants";
import Comments from "./Comments";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videos = useSelector((store) => store.vid.videos);
  const [comments, setComments] = useState();

  const dispatch = useDispatch();

  const handleComments = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
        searchParams.get("v") +
        "&key=" +
        YOUTUBE_APIKEY
    );
    const json = await data.json();

    setComments(json.items);
  };

  useEffect(() => {
    dispatch(menuCollapse());
    handleComments();
    return () => {
      dispatch(isOpenMenu());
    };
  }, []);

  if (!videos) return null;

  const video = videos.filter((video) => video.id === searchParams.get("v"));

  const { title, description } = video[0].snippet;

  const Split_Description = ({ description }) => {
    const lines = description.split("\n");

    return (
      <div>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="mx-20 my-3">
      <iframe
        className="rounded-lg "
        width="930"
        height="530"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?si=_-PPl6L1bV_W2QdJ&autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-xl my-2">{title}</h1>
      <div className="font-semibold text-md bg-gray-200 p-3 rounded-xl w-[930px]">
        <Split_Description description={description} />
      </div>
      <div>
        <h1 className="font-bold text-2xl my-2">Comments: </h1>
        {/* {!comments
          ? null
          : comments.map((comment, index) => (
              <Comments index={index} comment={comment} />
            ))} */}
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;
