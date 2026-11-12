import { useEffect } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useForm } from "react-hook-form";
import { request } from "@/axios";

interface ModalUpdateProps {
  selectedId: string;
}

function ModalUpdate({ selectedId }: ModalUpdateProps) {
  const { register, setValue } = useForm();

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

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ubah Komentar</DialogTitle>
      </DialogHeader>

      <form>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="body">Komentar</label>
          <textarea {...register("body")} className="border" />
        </div>

        <Button type="submit">Kirim</Button>
      </form>
    </DialogContent>
  );
}

export default ModalUpdate;
