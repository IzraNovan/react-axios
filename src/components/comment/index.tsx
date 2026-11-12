import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { request } from "../../axios";

function Comment() {
  const [comments, setComments] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await request.get("/comments");
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllComments();
  }, [trigger]);

  return (
    <>
      <CommentList comments={comments} />
      <CommentForm setTrigger={setTrigger} />
    </>
  );
}

export default Comment;
