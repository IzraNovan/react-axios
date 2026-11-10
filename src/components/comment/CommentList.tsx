interface Comment {
  id: number;
  body: string;
  likes: number;
  user: {
    id: number;
    username: string;
  };
}

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <section>
      <h1 className="font-semibold mb-3">Daftar Komentar</h1>

      <main className="flex flex-col gap-4">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="border p-2 rounded-lg w-80">
              <p className="italic">"{comment.body}"</p>

              <div className="flex justify-between text-sm border-t m-1 pt-2">
                <p>- {comment.user.username}</p>
                <p>{comment.likes} Menyukai</p>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default CommentList;
