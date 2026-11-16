import { request } from "@/axios";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ModalDeleteProps {
  selectedId: string;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalDelete({ selectedId, setTrigger }: ModalDeleteProps) {
  const handleDelete = async () => {
    try {
      await request.delete(`/comments/${selectedId}`);
      setTrigger((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Hapus Komentar</AlertDialogTitle>
        <AlertDialogDescription>Apakah anda yakin ingin menghapus data ini</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Ga jadi ah</AlertDialogCancel>
        <AlertDialogAction onClick={handleDelete}>Gas</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default ModalDelete;
