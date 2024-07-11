import { USER_ICON } from "../utils/constants";

const CommentsContainer = () => {
  const comments = [
    {
      name: "Sandeep",
      text: "Hello",
      replies: [
        {
          name: "Sandeep",
          text: "Hello",
          replies: [],
        },
        {
          name: "Sandeep",
          text: "Hello",
          replies: [
            {
              name: "Sandeep",
              text: "Hello",
              replies: [],
            },
          ],
        },
        {
          name: "Sandeep",
          text: "Hello",
          replies: [],
        },
      ],
    },
    {
      name: "Sandeep",
      text: "Hello",
      replies: [
        {
          name: "Sandeep",
          text: "Hello",
          replies: [
            {
              name: "Sandeep",
              text: "Hello",
              replies: [],
            },
          ],
        },
        {
          name: "Sandeep",
          text: "Hello",
          replies: [],
        },
      ],
    },
    {
      name: "Sandeep",
      text: "Hello",
      replies: [],
    },
    {
      name: "Sandeep",
      text: "Hello",
      replies: [
        {
          name: "Sandeep",
          text: "Hello",
          replies: [],
        },
        {
          name: "Sandeep",
          text: "Hello",
          replies: [
            {
              name: "Sandeep",
              text: "Hello",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Sandeep",
      text: "Hello",
      replies: [],
    },
    {
      name: "Sandeep",
      text: "Hello",
      replies: [
        {
          name: "Sandeep",
          text: "Hello",
          replies: [
            {
              name: "Sandeep",
              text: "Hello",
              replies: [],
            },
            {
              name: "Sandeep",
              text: "Hello",
              replies: [],
            },
          ],
        },
        {
          name: "Sandeep",
          text: "Hello",
          replies: [],
        },
      ],
    },
  ];

  const CommentReply = ({ replies }) => {
    return (
      <div>
        {replies.map((reply, index) => (
          <div key={index} className="flex my-3 border-l border-l-black pl-3">
            <img src={USER_ICON} alt="UserPic" className="w-10 h-10" />
            <div className="mx-2">
              <h1 className="font-bold">{reply.name}</h1>
              <h1 className="mx-1">{reply.text}</h1>
              <CommentReply replies={reply.replies} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="flex my-3 bg-gray-100">
          <img src={USER_ICON} alt="UserPic" className="w-10 h-10" />
          <div className="mx-2">
            <h1 className="font-bold">{comment.name}</h1>
            <h1 className="mx-1">{comment.text}</h1>
            <CommentReply replies={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsContainer;
