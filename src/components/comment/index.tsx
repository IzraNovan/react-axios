import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { request } from "../../axios";
import { Button } from "../ui/button";
import { Link } from "react-router";

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
      <CommentList comments={comments} setTrigger={setTrigger} />
      {/*<CommentForm setTrigger={setTrigger} />*/}

      <Link to="/create">
        <Button>Tambah Komentar</Button>
      </Link>
    </>
  );
}

export default Comment;
