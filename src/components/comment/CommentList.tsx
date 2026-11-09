interface Comment {
  id: number;
  comment: string;
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
            <div key={comment.id} className="border p-2 rounded-lg ">
              <p className="italic">"{comment.body}"</p>
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default CommentList;
