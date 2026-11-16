import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ModalUpdate from "./ModalUpdate";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import ModalDelete from "./ModalDelete";
import { Pencil, Trash } from "lucide-react";

interface Comment {
  id: string;
  body: string;
  likes: number;
  user: {
    id: number;
    username: string;
  };
}

interface CommentListProps {
  comments: Comment[];
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentList({ comments, setTrigger }: CommentListProps) {
  const [selectedId, setSelectedId] = useState("");

  return (
    <section>
      <h1 className="font-semibold mb-3">Daftar Komentar</h1>

      <main className="flex flex-col gap-4">
        {comments.map((comment) => {
          return (
            <section key={comment.id}>
              <div className="border p-2 rounded-lg w-80">
                <div className="flex justify-between items-center">
                  <p className="italic text-xs">"{comment.body}"</p>

                  <div className="flex gap-1 ">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setSelectedId(comment.id)}
                        >
                          <Trash />
                        </Button>
                      </AlertDialogTrigger>

                      <ModalDelete selectedId={selectedId} setTrigger={setTrigger} />
                    </AlertDialog>

                    <Dialog>
                      <DialogTrigger>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedId(comment.id)}
                        >
                          <Pencil />
                        </Button>
                      </DialogTrigger>

                      <ModalUpdate selectedId={selectedId} setTrigger={setTrigger} />
                    </Dialog>
                  </div>
                </div>

                <div className="flex justify-between text-sm border-t m-1 pt-2">
                  <p>- {comment.user.username}</p>
                  <p>{comment.likes} Menyukai</p>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </section>
  );
}

export default CommentList;
