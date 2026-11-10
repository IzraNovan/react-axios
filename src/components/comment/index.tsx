import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch("http://localhost:3000/comments");
        const data = await response.json();

        setComments(data);
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
