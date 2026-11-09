import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments?limit=5");
        const data = await response.json();

        setComments(data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    getAllComments();
  }, []);

  return (
    <>
      <CommentList comments={comments} />
      {/*<CommentForm />*/}
    </>
  );
}

export default Comment;
