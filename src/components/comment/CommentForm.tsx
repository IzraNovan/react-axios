import { useState } from "react";
import { request } from "../../axios";

interface CommentFormProps {
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentForm({ setTrigger }: CommentFormProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await request.post("/comments", {
        body: comment,
        likes: 0,
        user: {
          username: "Izra",
        },
      });

      setTrigger((prev) => !prev);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-96">
        <label htmlFor="Komentar" className="text-sm">
          Komentar
        </label>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border"
        ></textarea>

        <button type="submit" className="border p-2 mt-5 rounded-xl text-xs">
          Kirim
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
