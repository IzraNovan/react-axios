import { useEffect } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { request } from "@/axios";

interface ModalUpdateProps {
  selectedId: string;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalUpdate({ selectedId, setTrigger }: ModalUpdateProps) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const getCommentByID = async () => {
      try {
        const response = await request.get(`/comments/${selectedId}`);
        setValue("body", response.data.body);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentByID();
  }, [selectedId]);

  const onSave = async (data) => {
    try {
      await request.put(`/comments/${selectedId}`, {
        body: data.body,
        likes: 0,
        user: {
          username: "Izra",
        },
      });

      setTrigger((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ubah Komentar</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSave)}>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="body">Komentar</label>
          <textarea {...register("body")} className="border" />
        </div>

        <DialogClose>
          <Button type="submit">Kirim</Button>
        </DialogClose>
      </form>
    </DialogContent>
  );
}

export default ModalUpdate;
